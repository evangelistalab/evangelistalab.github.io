// Interactive hero for the home page: the six Hückel π orbitals of benzene,
// computed on a grid from carbon 2p Slater functions and drawn as isosurfaces.

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';

const GOLD = 0xf2a900;
const BLUE = 0x007dba;

const RESOLUTION = 64;      // grid points per side
const BOX = 7.5;            // half-width of the grid (bohr)
const ISOVALUE = 0.06;      // orbital isosurface value
const ZETA = 1.625;         // carbon 2p Slater exponent
const R_CC = 2.63;          // ring radius = C–C bond length (bohr)
const R_CH = 2.06;          // C–H bond length (bohr)
const CYCLE_MS = 6000;      // time each orbital is shown
const TRANSITION_MS = 1500; // duration of the morph between orbitals

// Hückel coefficients for the six π orbitals, lowest to highest energy
const ORBITALS = [
    { label: 'ψ₁', c: [1, 1, 1, 1, 1, 1].map(v => v / Math.sqrt(6)) },
    { label: 'ψ₂ · HOMO', c: [2, 1, -1, -2, -1, 1].map(v => v / Math.sqrt(12)) },
    { label: 'ψ₃ · HOMO', c: [0, 1, 1, 0, -1, -1].map(v => v / 2) },
    { label: 'ψ₄ · LUMO', c: [2, -1, -1, 2, -1, -1].map(v => v / Math.sqrt(12)) },
    { label: 'ψ₅ · LUMO', c: [0, 1, -1, 0, 1, -1].map(v => v / 2) },
    { label: 'ψ₆', c: [1, -1, 1, -1, 1, -1].map(v => v / Math.sqrt(6)) },
];

// Ring in the x–z plane, so the p orbitals point along y (up)
const carbons = [...Array(6).keys()].map(j => {
    const t = (j * Math.PI) / 3;
    return new THREE.Vector3(R_CC * Math.cos(t), 0, R_CC * Math.sin(t));
});
const hydrogens = carbons.map(c => c.clone().multiplyScalar((R_CC + R_CH) / R_CC));

// Each carbon 2p orbital evaluated once on the grid; every π orbital (and every
// blend between two of them) is then just a linear combination of these six.
function computeAtomicFields() {
    const n = RESOLUTION;
    const half = n / 2;
    const norm = Math.sqrt(ZETA ** 5 / Math.PI);
    return carbons.map(c => {
        const field = new Float32Array(n * n * n);
        for (let k = 0; k < n; k++) {
            const z = ((k - half) / half) * BOX;
            for (let j = 0; j < n; j++) {
                const y = ((j - half) / half) * BOX;
                for (let i = 0; i < n; i++) {
                    const x = ((i - half) / half) * BOX;
                    const dx = x - c.x;
                    const dz = z - c.z;
                    const r = Math.sqrt(dx * dx + y * y + dz * dz);
                    field[i + j * n + k * n * n] = norm * y * Math.exp(-ZETA * r);
                }
            }
        }
        return field;
    });
}

function fillField(posMesh, negMesh, atomicFields, coeffs) {
    const pos = posMesh.field;
    const neg = negMesh.field;
    for (let q = 0; q < pos.length; q++) {
        let psi = 0;
        for (let a = 0; a < 6; a++) psi += coeffs[a] * atomicFields[a][q];
        pos[q] = psi;
        neg[q] = -psi;
    }
    // MarchingCubes caches normals and only clears them in reset(), which would
    // also zero the field, so clear the cache here or lighting goes stale
    posMesh.normal_cache.fill(0);
    negMesh.normal_cache.fill(0);
    posMesh.update();
    negMesh.update();
}

// Ball-and-stick model: soft, satin-shaded spheres and thick grey bonds,
// with Kekulé double bonds drawn as two parallel cylinders
const C_RADIUS = 0.65;
const H_RADIUS = 0.45;
const BOND_RADIUS = 0.18;
const DOUBLE_BOND_RADIUS = 0.15;
const DOUBLE_BOND_OFFSET = 0.19;

function buildMolecule() {
    const group = new THREE.Group();
    const satin = color => new THREE.MeshPhongMaterial({ color, specular: 0x404040, shininess: 14 });
    const carbonMat = satin(0x555555);
    const hydrogenMat = satin(0xdedede);
    const bondMat = satin(0x8c8c8c);
    const carbonGeo = new THREE.SphereGeometry(C_RADIUS, 48, 24);
    const hydrogenGeo = new THREE.SphereGeometry(H_RADIUS, 48, 24);
    const up = new THREE.Vector3(0, 1, 0);

    const addCylinder = (a, b, radius) => {
        const bond = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, a.distanceTo(b), 24), bondMat);
        bond.position.copy(a).add(b).multiplyScalar(0.5);
        bond.quaternion.setFromUnitVectors(up, b.clone().sub(a).normalize());
        group.add(bond);
    };

    const addDoubleBond = (a, b) => {
        // Offset the two cylinders within the ring plane, perpendicular to the bond
        const side = b.clone().sub(a).cross(up).normalize().multiplyScalar(DOUBLE_BOND_OFFSET);
        addCylinder(a.clone().add(side), b.clone().add(side), DOUBLE_BOND_RADIUS);
        addCylinder(a.clone().sub(side), b.clone().sub(side), DOUBLE_BOND_RADIUS);
    };

    carbons.forEach((c, j) => {
        const atom = new THREE.Mesh(carbonGeo, carbonMat);
        atom.position.copy(c);
        group.add(atom);
        const h = new THREE.Mesh(hydrogenGeo, hydrogenMat);
        h.position.copy(hydrogens[j]);
        group.add(h);
        const next = carbons[(j + 1) % 6];
        if (j % 2 === 0) addDoubleBond(c, next);
        else addCylinder(c, next, BOND_RADIUS);
        addCylinder(c, hydrogens[j], BOND_RADIUS);
    });
    return group;
}

function init(container) {
    const canvas = container.querySelector('canvas');
    const label = container.querySelector('.hero-orbital-label');

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 12, 14);

    // Key light rides with the camera so the shading always comes from the
    // viewer's upper left, as the molecule turns
    scene.add(new THREE.HemisphereLight(0xffffff, 0x333333, 0.45));
    const key = new THREE.DirectionalLight(0xffffff, 3.4);
    key.position.set(-8, 8, 5);
    camera.add(key);
    scene.add(camera);

    const lobeMaterial = color => new THREE.MeshStandardMaterial({
        color, roughness: 0.35, metalness: 0.05, side: THREE.DoubleSide,
    });
    const posMesh = new MarchingCubes(RESOLUTION, lobeMaterial(GOLD), false, false, 80000);
    const negMesh = new MarchingCubes(RESOLUTION, lobeMaterial(BLUE), false, false, 80000);
    for (const m of [posMesh, negMesh]) {
        m.isolation = ISOVALUE;
        m.scale.setScalar(BOX);
        scene.add(m);
    }
    scene.add(buildMolecule());

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const controls = new OrbitControls(camera, canvas);
    controls.enableZoom = false;   // don't hijack page scrolling
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.autoRotate = !reduceMotion;
    controls.autoRotateSpeed = 1.2;
    // OrbitControls blocks all touch scrolling; let vertical swipes scroll the page
    canvas.style.touchAction = 'pan-y';

    const atomicFields = computeAtomicFields();
    const setLabel = index => {
        label.textContent = `Benzene π orbital ${ORBITALS[index].label}`;
    };

    let current = 1;  // start with the HOMO
    fillField(posMesh, negMesh, atomicFields, ORBITALS[current].c);
    setLabel(current);

    // Morph from one orbital to the next: cos(θ)ψa + sin(θ)ψb stays normalized
    // for orthonormal orbitals, so the lobes keep their size during the blend.
    let transition = null;
    const morph = now => {
        const t = Math.min((now - transition.start) / TRANSITION_MS, 1);
        const theta = t * t * (3 - 2 * t) * (Math.PI / 2);  // smoothstep easing
        const a = ORBITALS[transition.from].c;
        const b = ORBITALS[transition.to].c;
        const coeffs = a.map((ca, i) => Math.cos(theta) * ca + Math.sin(theta) * b[i]);
        fillField(posMesh, negMesh, atomicFields, coeffs);
        if (t === 1) {
            current = transition.to;
            transition = null;
        }
    };

    // Only animate while the viewer is on screen
    let visible = true;
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(container);

    if (!reduceMotion) {
        setInterval(() => {
            if (document.hidden || !visible || transition) return;
            const to = (current + 1) % ORBITALS.length;
            transition = { from: current, to, start: performance.now() };
            label.classList.add('fading');
            setTimeout(() => {
                setLabel(to);
                label.classList.remove('fading');
            }, TRANSITION_MS / 2);
        }, CYCLE_MS);
    }

    const resize = () => {
        const { width, height } = container.querySelector('.hero-canvas').getBoundingClientRect();
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    };
    new ResizeObserver(resize).observe(container);
    resize();

    renderer.setAnimationLoop(() => {
        if (!visible) return;
        if (transition) morph(performance.now());
        controls.update();
        renderer.render(scene, camera);
    });
}

const container = document.querySelector('.hero-viewer');
if (container) {
    try {
        init(container);
    } catch (err) {
        // No WebGL: hide the viewer and keep the rest of the page
        container.hidden = true;
        console.warn('3D viewer unavailable:', err);
    }
}
