// Publication list and research themes for the publications page.
// Each paper lists its themes; the first one is the branch it sits on in the graph,
// the others are drawn as merges. Newest papers first.

export const THEMES = [
    {
        "id": "applications",
        "name": "Applications",
        "color": "#6c757d",
        "description": "Electronic structure studies of radicals, reactive intermediates, tunneling, and collaborative projects."
    },
    {
        "id": "mrcc",
        "name": "Multireference coupled cluster",
        "color": "#6a4c93",
        "description": "State-specific (Mk-MRCC) and internally contracted multireference coupled cluster theories."
    },
    {
        "id": "software",
        "name": "Software",
        "color": "#0c2340",
        "description": "Open-source quantum chemistry software: Psi4, Forte, QForte, and more."
    },
    {
        "id": "xray",
        "name": "X-ray & core spectroscopy",
        "color": "#c0272d",
        "description": "Methods and applications for core-excited and core-ionized states probed by X-ray spectroscopies."
    },
    {
        "id": "sci",
        "name": "Selected CI",
        "color": "#2a9d8f",
        "description": "Adaptive and projector configuration interaction methods that exploit the sparsity of the wave function."
    },
    {
        "id": "dsrg",
        "name": "DSRG",
        "color": "#007dba",
        "description": "The driven similarity renormalization group and its multireference perturbation and coupled cluster variants."
    },
    {
        "id": "relativistic",
        "name": "Relativistic",
        "color": "#e76f51",
        "description": "Relativistic Hamiltonians and spin–orbit coupling in multireference theories."
    },
    {
        "id": "quantum",
        "name": "Quantum computing",
        "color": "#b58500",
        "description": "Quantum algorithms for electronic structure: unitary coupled cluster, eigensolvers, Krylov methods, and circuits."
    },
    {
        "id": "formalism",
        "name": "Many-body formalism",
        "color": "#2b9348",
        "description": "Automated derivations, unitary transformations, and the algebra of fermionic operators."
    },
    {
        "id": "embedding",
        "name": "Embedding",
        "color": "#c44b8a",
        "description": "Active-space embedding theories that combine multireference methods with mean-field environments."
    },
    {
        "id": "perspectives",
        "name": "Perspectives",
        "color": "#8d99ae",
        "description": "Reviews, perspectives, and editorials."
    }
];

export const PUBLICATIONS = [
    {
        "title": "Witnessing Spin-Orbital Entanglement Using Resonant Inelastic X-Ray Scattering",
        "authors": "Z. Shen, S. Ding, Z. Zhao, F. A. Evangelista, Y. Wang",
        "venue": "Phys. Rev. Lett.",
        "year": 2026,
        "doi": "10.1103/nyxb-nqtq",
        "themes": [
            "xray",
            "relativistic"
        ],
        "digest": "A protocol is developed for detecting spin–orbital entanglement from resonant inelastic X-ray scattering spectra. A Hermitian generator constructed from measurable spectra yields the quantum Fisher information, which serves as an entanglement witness; relaxed bounds extend the approach to measurements lacking full polarization resolution."
    },
    {
        "title": "The Python simulations of chemistry framework: 10 years of an open-source quantum chemistry project",
        "authors": "Q. Sun, M. R. Hermes, X. Wu, H. Zhai, X. Zhang, A. M. Ahmed, J. J. Aucar, O. J. Backhouse, S. Banerjee, P. Bao, N. A. Bogdanov, K. Bystrom, F. Chapoton, N. Chen, I. Y. Chernyshov, H. Clifford, S. J. Cohen‐Janes, Z. Cui, Y. Damour, N. Dattani, L. B. Dittmer, S. Ehlert, J. J. Eriksen, F. A. Evangelista, S. Ewing, A. Farahvash, K. Focke, Y. Gao, K. E. Gasperich, N. Gillispie, J. Greiner, M. R. Hennefarth, J. Hermann, C. Hillenbrand, J. Huhtasalo, B. Ibrahim, B. Jangid, A. N. Javaremi, A. J. Jenkins, Y. Jin, D. S. King, D. P. Kooi, J. S. Kurian, H. R. Larsson, B. T. G. Lau, S. Lee, S. Lehtola, C. Li, H. Li, J. Li, R. Li, S. Li, Л. А. Олегович, A. Mahajan, N. Mauger, P. d. Mazo‐Sevillano, J. E. Moussa, K. Nakano, V. A. Neufeld, L. Peng, H. V. Pham, P. Pinski, P. Pokhilko, Z. Pu, Y. Qian, S. J. Quiton, W. T. Schulze, T. R. Scott, A. Seal, J. D. Serna, J. E. T. Smith, K. E. Smyser, T. Stahl, C. Sun, K. J. Sung, E. Trushin, S. Upadhyay, E. Vo, T. Vogels, S. Wang, T. F. Wang, X. Wang, X. Wang, Y. Wang, M. J. Williamson, J. Yang, H. Ye, C. Yeh, H. Yu, J. Yu, V. W. Yu, C. Zhang, D. Zhang, Y. Zhang, Z. Zhao, Z. Zhou, Z. Zhu, T. Zhu, T. C. Berkelbach, L. Gagliardi",
        "venue": "J. Chem. Phys.",
        "year": 2026,
        "doi": "10.1063/5.0337441",
        "themes": [
            "software"
        ],
        "digest": "This article reviews the development of the PySCF program since its 2020 overview, describing new modules and methodology, changes to the infrastructure, and performance benchmarks of this widely used open-source platform."
    },
    {
        "title": "Symmetry dilemmas in quantum computing for chemistry: A comprehensive analysis",
        "authors": "I. Magoulas, M. Zhang, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2026,
        "doi": "10.1063/5.0316482",
        "themes": [
            "quantum"
        ],
        "digest": "Symmetry adaptation, universality, and gate efficiency are competing requirements for operator pools in quantum algorithms. We prove that the gate-efficient pool of spin-adapted singles and perfect-pairing doubles is not universal when spatial symmetry is enforced, and we establish numerically when symmetry may safely be broken."
    },
    {
        "title": "Reaching the thermodynamic limit of periodic CCSD cohesive energies and band gaps",
        "authors": "S. Li, H. Zhai, F. A. Evangelista, T. C. Berkelbach",
        "venue": "Research Square",
        "year": 2026,
        "doi": "10.21203/rs.3.rs-10541268/v1",
        "themes": [
            "applications"
        ],
        "preprint": true,
        "digest": "A distributed-memory implementation of periodic CCSD permits Brillouin-zone sampling with up to 216 k-points. Cohesive energies and band gaps of eight semiconductors and insulators are converged to 0.1 eV, providing benchmark values at the CCSD level of theory."
    },
    {
        "title": "One-Step Relativistic Driven Similarity Renormalization Group Multireference Perturbation Theory",
        "authors": "Z. Zhao, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2026,
        "doi": "10.1021/acs.jctc.6c00935",
        "themes": [
            "dsrg",
            "relativistic"
        ],
        "digest": "We present X2C-DSRG-MRPT2, a one-step relativistic multireference perturbation theory in which spin–orbit coupling is treated variationally. Spin–orbit splittings for molecules containing elements up to the sixth row are reproduced with mean absolute percentage errors below 7%."
    },
    {
        "title": "Discerning Mode-Controlled Relaxation Pathways in Photoionized Methane via X-ray Transient Absorption Spectroscopy",
        "authors": "K. Marin, F. A. Evangelista",
        "venue": "J. Am. Chem. Soc.",
        "year": 2026,
        "doi": "10.1021/jacs.6c07197",
        "themes": [
            "xray",
            "applications"
        ],
        "digest": "Using ab initio molecular dynamics and multireference computations of core-excited states, we show that carbon K-edge transient absorption can distinguish the relaxation pathways of CH₄⁺ following vibrational pre-excitation of methane, providing experimentally testable signatures of mode-selective ionization dynamics."
    },
    {
        "title": "Clifford transformations for fermionic quantum systems: From Pauli and Majorana operators to Dirac fermions",
        "authors": "I. Magoulas, F. A. Evangelista",
        "venue": "Phys. Rev. A",
        "year": 2026,
        "doi": "10.1103/y52r-pd4y",
        "themes": [
            "quantum",
            "formalism"
        ],
        "digest": "We extend the concept of Clifford transformations to fermionic systems. We show that fermionic Clifford transformations are generated by half-body and pair operators and establish connections with fermionic mean-field theory and qubit tapering."
    },
    {
        "title": "Advancing Reproducibility and Open Data in Theoretical and Computational Chemistry",
        "authors": "R. E. Amaro, V. S. Batista, J. Blumberger, Y. S. Choong, C. Corminbœuf, Z. Cournia, Q. Cui, M. D. Vivo, F. A. Evangelista, Y. Q. Gao, D. Ghosh, X. D. He, O. Isayev, S. Khalid, J. Kirchmair, J. R. Kitchin, H. Liu, K. J. Naidoo, D. D. Nguyen, A. Nunes‐Alves, G. Palermo, B. Savoie, T. A. Soares, P. Tiwary, G. Wei, X. Zheng, T. Zhu, K. M. Merz, L. Gagliardi",
        "venue": "J. Chem. Theory Comput.",
        "year": 2026,
        "doi": "10.1021/acs.jctc.6c00733",
        "themes": [
            "perspectives",
            "software"
        ],
        "digest": "This editorial announces a policy of the Journal of Chemical Theory and Computation and the Journal of Chemical Information and Modeling, effective May 1, 2026, requiring that the data and software needed to reproduce the key results of research articles be made available at submission."
    },
    {
        "title": "Thermal Weight Determination and Interstate Coupling in State-Averaged ADAPT-VQE",
        "authors": "H. R. Grimsley, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2025,
        "doi": "10.1021/acs.jctc.5c01313",
        "themes": [
            "quantum"
        ],
        "digest": "We introduce HOT-ADAPT-VQE, an ancilla-free method for preparing thermal states that directly minimizes the Helmholtz free energy. Applications to an Fe²⁺ ion in a magnetic field and a [Cu₂O₇]¹⁰⁻ fragment of La₂CuO₄ show improved Gibbs-state estimates, often with shallower circuits."
    },
    {
        "title": "Spin-Adapted Fermionic Unitaries: From Lie Algebras to Compact Quantum Circuits",
        "authors": "I. Magoulas, F. A. Evangelista",
        "venue": "arXiv",
        "year": 2025,
        "doi": "10.48550/arxiv.2511.13485",
        "themes": [
            "quantum",
            "formalism"
        ],
        "preprint": true,
        "digest": "Using the Wei–Norman approach, we derive exact product formulas for singlet spin-adapted fermionic unitaries and obtain closed-form parameters for the larger dynamical Lie algebras. The resulting circuits are the most compact reported for exact implementation of spin-adapted generalized singles and doubles."
    },
    {
        "title": "Mutual Correlation",
        "authors": "F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2025,
        "doi": "10.1021/acs.jctc.5c00766",
        "themes": [
            "formalism"
        ],
        "digest": "We introduce mutual correlation, a measure of nonadditive correlation among subsystems based on the norm of the two-body cumulant, and compare it with orbital mutual information on H₁₀, N₂, and p-benzyne. We propose it as a tool for active-space selection and the interpretation of electronic states."
    },
    {
        "title": "Multireference Equation-of-Motion Driven Similarity Renormalization Group: Theoretical Foundations and Applications to Ionized States",
        "authors": "Z. Zhao, S. Li, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2025,
        "doi": "10.1021/acs.jctc.5c00992",
        "themes": [
            "dsrg",
            "xray"
        ],
        "digest": "We formulate IP-EOM-DSRG, an equation-of-motion extension of the multireference DSRG for ionization potentials. Combined with perturbative and nonperturbative parent theories, it reproduces vertical ionization potentials and spectroscopic constants of radicals; the third-order and iterative variants outperform several multireference methods of comparable cost."
    },
    {
        "title": "Exact closed-form unitary transformations of fermionic operators",
        "authors": "F. A. Evangelista, I. Magoulas",
        "venue": "Phys. Rev. A",
        "year": 2025,
        "doi": "10.1103/physreva.111.042825",
        "themes": [
            "formalism",
            "quantum"
        ],
        "digest": "We derive closed-form expressions for unitary transformations generated by a single fermionic operator, for both Hermitian and anti-Hermitian generators, and apply them to Hamiltonian downfolding in quantum computing and to Heisenberg dynamics."
    },
    {
        "title": "Equation-of-motion internally contracted multireference unitary coupled-cluster theory",
        "authors": "S. Li, Z. Zhao, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2025,
        "doi": "10.1063/5.0261000",
        "themes": [
            "mrcc",
            "quantum"
        ],
        "digest": "We introduce EOM-ic-MRUCC, an equation-of-motion extension of internally contracted multireference unitary coupled-cluster theory. We show that its excitation energies are size-intensive and invariant to active-orbital rotations; computed potential energy curves for BeH₂, HF, and water lie within 5 mEₕ of full configuration interaction."
    },
    {
        "title": "Electronic Structure and Spectroscopy of CuBe",
        "authors": "A. Rodriguez, S. Vadachkoria, F. A. Evangelista, M. C. Heaven",
        "venue": "J. Phys. Chem. A",
        "year": 2025,
        "doi": "10.1021/acs.jpca.4c08565",
        "themes": [
            "applications",
            "relativistic"
        ],
        "digest": "Resonantly enhanced two-photon ionization spectra of CuBe are reported, characterizing four excited states. Electronic structure calculations aid the assignment and indicate that states from the Cu(3d⁹4s²) + Be(2s²) asymptote are responsible for the observed predissociation."
    },
    {
        "title": "Editorial: 100 Years of Quantum Mechanics - All About Molecules",
        "authors": "E. Mátyus, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2025,
        "doi": "10.1021/acs.jctc.5c00702",
        "themes": [
            "perspectives"
        ]
    },
    {
        "title": "Closed-form expressions for unitaries of spin-adapted fermionic operators",
        "authors": "I. Magoulas, F. A. Evangelista",
        "venue": "Mol. Phys.",
        "year": 2025,
        "doi": "10.1080/00268976.2025.2534672",
        "themes": [
            "formalism",
            "quantum"
        ],
        "digest": "We derive closed-form expressions for unitaries generated by singlet spin-adapted generalized single and double excitations, addressing the enforcement of spin symmetry in quantum simulations of chemical systems."
    },
    {
        "title": "An Improved Virtual Orbital Driven Similarity Renormalization Group Approach for Core-Ionized and Core-Excited States",
        "authors": "M. Huang, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2025,
        "doi": "10.1021/acs.jctc.5c00457",
        "themes": [
            "dsrg",
            "xray"
        ],
        "digest": "We combine improved virtual orbitals and generalized active space CI with the multireference DSRG to describe core-ionized and core-excited states without orbital optimization. The third-order variant offers the best balance of cost and accuracy and reproduces key features of the X-ray absorption spectra of thymine and adenine."
    },
    {
        "title": "Toward Accurate Spin–Orbit Splittings from Relativistic Multireference Electronic Structure Theory",
        "authors": "Z. Zhao, F. A. Evangelista",
        "venue": "J. Phys. Chem. Lett.",
        "year": 2024,
        "doi": "10.1021/acs.jpclett.4c01372",
        "themes": [
            "relativistic",
            "dsrg"
        ],
        "digest": "We report the first state-averaged four-component relativistic multireference perturbation theories based on the DSRG. Dynamical correlation added to 4c-CASSCF references improves spin–orbit splittings of p-block elements, with systematic improvement from second to third order."
    },
    {
        "title": "Implementation of the Projective Quantum Eigensolver on a Quantum Computer",
        "authors": "J. P. Misiewicz, F. A. Evangelista",
        "venue": "J. Phys. Chem. A",
        "year": 2024,
        "doi": "10.1021/acs.jpca.3c07429",
        "themes": [
            "quantum"
        ],
        "digest": "We implement the projective quantum eigensolver on IBM quantum hardware, obtaining energies within 4 mEₕ of the exact result along a potential energy curve and recovering 99% of the correlation energy of a four-site transverse-field Ising model. We also discuss strategies for error mitigation."
    },
    {
        "title": "Frozen Natural Orbitals for the State-Averaged Driven Similarity Renormalization Group",
        "authors": "C. Li, S. Mao, R. Huang, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2024,
        "doi": "10.1021/acs.jctc.4c00152",
        "themes": [
            "dsrg"
        ],
        "digest": "We reduce the cost of the state-averaged DSRG with a frozen-natural-orbital approach. Errors in vertical excitation energies remain below 0.01 eV, we observe a ninefold speedup for nickel carbonyl, and nonperturbative computations on chloroiron corrole with more than 1000 basis functions become feasible."
    },
    {
        "title": "Forte: A suite of advanced multireference quantum chemistry methods",
        "authors": "F. A. Evangelista, C. Li, P. Verma, K. P. Hannon, J. B. Schriber, T. Zhang, C. Cai, S. Wang, N. He, N. H. Stair, M. Huang, R. Huang, J. P. Misiewicz, S. Li, K. Marin, Z. Zhao, L. A. Burns",
        "venue": "J. Chem. Phys.",
        "year": 2024,
        "doi": "10.1063/5.0216512",
        "themes": [
            "software",
            "dsrg"
        ],
        "digest": "We describe Forte, our open-source library for multireference electronic structure theory and the rapid prototyping of new methods, including its capabilities, software architecture, and representative applications."
    },
    {
        "title": "Fermionic mean-field theory as a tool for studying spin Hamiltonians",
        "authors": "T. M. Henderson, B. Harrison, I. Magoulas, J. Necaise, A. M. Projansky, F. A. Evangelista, J. D. Whitfield, G. E. Scuseria",
        "venue": "J. Chem. Phys.",
        "year": 2024,
        "doi": "10.1063/5.0242219",
        "themes": [
            "formalism"
        ],
        "digest": "Several mappings between spin and fermionic degrees of freedom, including the Jordan–Wigner transformation, are applied to the XXZ, J₁–J₂ Heisenberg, and reduced BCS Hamiltonians to determine which are most useful for treating spin systems with fermionic mean-field theory."
    },
    {
        "title": "Concluding remarks",
        "authors": "F. A. Evangelista",
        "venue": "Faraday Discuss.",
        "year": 2024,
        "doi": "10.1039/d4fd00152d",
        "themes": [
            "perspectives"
        ],
        "digest": "We summarize the 2024 Faraday Discussion on correlated electronic structure, which addressed the definition and quantification of electron correlation, solid-state applications, machine learning, and quantum computing."
    },
    {
        "title": "Challenging excited states from adaptive quantum eigensolvers: subspace expansions vs. state-averaged strategies",
        "authors": "H. R. Grimsley, F. A. Evangelista",
        "venue": "Quantum Sci. Technol.",
        "year": 2024,
        "doi": "10.1088/2058-9565/ad9fa2",
        "themes": [
            "quantum"
        ],
        "digest": "We compare MORE-ADAPT-VQE, a state-averaged generalization of ADAPT-VQE, with a subspace-expansion approach for excited states of H₄ and BeH₂. It describes avoided crossings and crossings between states of different symmetry and yields accurate transition dipole moments."
    },
    {
        "title": "Benchmark Study of Core-Ionization Energies with the Generalized Active Space-Driven Similarity Renormalization Group",
        "authors": "M. Huang, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2024,
        "doi": "10.1021/acs.jctc.4c00835",
        "themes": [
            "dsrg",
            "xray"
        ],
        "digest": "We propose and benchmark the generalized active space DSRG for core-ionization energies. We obtain mean absolute errors below 0.3 eV for small molecules and of 0.34 eV for the CORE65 set, and vibrationally resolved X-ray photoelectron spectra of CO, N₂, and O₂ agree with experiment."
    },
    {
        "title": "Unitary Coupled Cluster: Seizing the Quantum Moment",
        "authors": "I. Magoulas, F. A. Evangelista",
        "venue": "J. Phys. Chem. A",
        "year": 2023,
        "doi": "10.1021/acs.jpca.3c02781",
        "themes": [
            "quantum",
            "perspectives"
        ],
        "digest": "We examine noniterative energy corrections based on the method of moments of coupled-cluster theory for accelerating the convergence of adaptive unitary ansätze. Our results indicate that chemically accurate energies may be reached with more compact quantum circuits."
    },
    {
        "title": "Signatures of diradicals in x-ray absorption spectroscopy",
        "authors": "K. Marin, M. Huang, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2023,
        "doi": "10.1063/5.0140761",
        "themes": [
            "xray"
        ],
        "digest": "We propose a model of the core-excited states of symmetric diradicals and apply it to the carbon K-edge spectra of o-, m-, and p-benzyne. Comparison with third-order DSRG computations shows the importance of a many-body treatment and identifies which ground-state properties can be extracted from the spectrum."
    },
    {
        "title": "Ring-Polymer Instanton Tunneling Splittings of Tropolone and Isotopomers using a Δ-Machine Learned CCSD(T) Potential: Theory and Experiment Shake Hands",
        "authors": "A. Nandi, G. Laude, S. S. Khire, N. D. Gurav, C. Qu, R. Conte, Q. Yu, S. Li, P. L. Houston, S. R. Gadre, J. O. Richardson, F. A. Evangelista, J. M. Bowman",
        "venue": "J. Am. Chem. Soc.",
        "year": 2023,
        "doi": "10.1021/jacs.3c00769",
        "themes": [
            "applications"
        ],
        "digest": "A Δ-machine-learned potential of near-CCSD(T) quality is combined with ring-polymer instanton theory to compute tunneling splittings of tropolone and its isotopomers. Agreement with experiment is obtained, including subtle effects observed for heavy-atom isotopomers."
    },
    {
        "title": "Linear-Scaling Quantum Circuits for Computational Chemistry",
        "authors": "I. Magoulas, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2023,
        "doi": "10.1021/acs.jctc.3c00376",
        "themes": [
            "quantum"
        ],
        "digest": "We present approximations to compact CNOT-efficient circuits for fermionic and qubit excitations. In selected projective quantum eigensolver simulations they reduce CNOT counts by up to a factor of four with practically no loss of accuracy."
    },
    {
        "title": "Leveraging Small-Scale Quantum Computers with Unitarily Downfolded Hamiltonians",
        "authors": "R. Huang, C. Li, F. A. Evangelista",
        "venue": "PRX Quantum",
        "year": 2023,
        "doi": "10.1103/prxquantum.4.020313",
        "themes": [
            "quantum",
            "dsrg"
        ],
        "digest": "We propose a quantum unitary downfolding formalism applicable to both noisy and fault-tolerant hardware and test it on several chemical problems, showing that molecular properties can be estimated with chemical accuracy on small-scale quantum computers."
    },
    {
        "title": "Intruder-free cumulant-truncated driven similarity renormalization group second-order multireference perturbation theory",
        "authors": "S. Li, J. P. Misiewicz, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2023,
        "doi": "10.1063/5.0159403",
        "themes": [
            "dsrg"
        ],
        "digest": "We examine the effect of truncating the three-body cumulant in DSRG second-order multireference perturbation theory. Errors of 0.5 kcal mol⁻¹ or less are found while storage is reduced from O(N⁶) to O(N⁵) in the number of active orbitals, without intruder-state problems."
    },
    {
        "title": "Editorial: Quantum Computing for Chemistry",
        "authors": "F. A. Evangelista, V. S. Batista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2023,
        "doi": "10.1021/acs.jctc.3c01043",
        "themes": [
            "perspectives",
            "quantum"
        ]
    },
    {
        "title": "CO Inversion on a NaCl(100) Surface: A Multireference Quantum Embedding Study",
        "authors": "N. He, M. Huang, F. A. Evangelista",
        "venue": "J. Phys. Chem. A",
        "year": 2023,
        "doi": "10.1021/acs.jpca.2c05844",
        "themes": [
            "embedding",
            "dsrg",
            "applications"
        ],
        "digest": "We use a multireference embedding model to study the isomerization of vibrationally excited CO on NaCl(100). Our calculations support the accepted inversion mechanism and indicate that CO–CO interactions within the monolayer play an important role in stabilizing the O-down configuration."
    },
    {
        "title": "CNOT-Efficient Circuits for Arbitrary Rank Many-Body Fermionic and Qubit Excitations",
        "authors": "I. Magoulas, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2023,
        "doi": "10.1021/acs.jctc.2c01016",
        "themes": [
            "quantum"
        ],
        "digest": "We generalize CNOT-efficient quantum circuits for fermionic and qubit excitations to arbitrary excitation rank. In selected projective quantum eigensolver simulations they reduce the number of CNOT gates by factors as large as 15."
    },
    {
        "title": "A study of core-excited states of organic molecules computed with the generalized active space driven similarity renormalization group",
        "authors": "M. Huang, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2023,
        "doi": "10.1063/5.0137096",
        "themes": [
            "dsrg",
            "xray"
        ],
        "digest": "We assess the accuracy of X-ray absorption spectra computed with the generalized active space DSRG on 116 transitions of the XABOOM set. Second-order results systematically underestimate excitation energies; third-order corrections reduce the mean absolute deviation from experiment to 0.32 eV."
    },
    {
        "title": "Second-Order Active-Space Embedding Theory",
        "authors": "N. He, C. Li, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2022,
        "doi": "10.1021/acs.jctc.1c01099",
        "themes": [
            "embedding",
            "dsrg"
        ],
        "digest": "We introduce ASET(2), a second-order active-space embedding theory in which fragment–environment interactions are treated by an approximate canonical transformation based on the DSRG. This treatment is necessary for accurate excitation energies of 1-octene and the singlet–triplet gap of the O₂–benzene complex."
    },
    {
        "title": "QForte: An Efficient State-Vector Emulator and Quantum Algorithms Library for Molecular Electronic Structure",
        "authors": "N. H. Stair, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2022,
        "doi": "10.1021/acs.jctc.1c01155",
        "themes": [
            "software",
            "quantum"
        ],
        "digest": "We introduce QForte, an open-source package for developing quantum simulation algorithms, with black-box implementations of variational and projective eigensolvers, adaptive methods, quantum imaginary time evolution, and quantum Krylov approaches."
    },
    {
        "title": "Automatic derivation of many-body theories based on general Fermi vacua",
        "authors": "F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2022,
        "doi": "10.1063/5.0097858",
        "themes": [
            "formalism",
            "software"
        ],
        "digest": "We describe Wick&d, an implementation of the algebra of second-quantized operators normal ordered with respect to general correlated references. We use it to evaluate coupled-cluster equations up to octuple excitations and to derive and implement DSRG second-order multireference perturbation theory automatically."
    },
    {
        "title": "AGP-based unitary coupled cluster theory for quantum computers",
        "authors": "A. Khamoshi, G. P. Chen, F. A. Evangelista, G. E. Scuseria",
        "venue": "Quantum Sci. Technol.",
        "year": 2022,
        "doi": "10.1088/2058-9565/ac93ae",
        "themes": [
            "quantum"
        ],
        "digest": "A unitary coupled-cluster method based on the antisymmetrized geminal power is developed and applied to the Fermi–Hubbard model in one and two dimensions. Post-selection is shown to be a less expensive alternative to gauge integration for restoring particle-number symmetry."
    },
    {
        "title": "Theoretical Calculation of Core-Excited States along Dissociative Pathways beyond Second-Order Perturbation Theory",
        "authors": "M. Huang, C. Li, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2021,
        "doi": "10.1021/acs.jctc.1c00884",
        "themes": [
            "xray",
            "dsrg",
            "sci"
        ],
        "digest": "We combine the multireference DSRG with a GASSCF reference to compute core-excited states. For 16 states of first-row diatomic molecules, adiabatic transition energies agree with experiment to within 0.17–0.35 eV, and treatments beyond second order improve the potential energy surfaces in the dissociation region."
    },
    {
        "title": "Spin-free formulation of the multireference driven similarity renormalization group: A benchmark study of first-row diatomic molecules and spin-crossover energetics",
        "authors": "C. Li, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2021,
        "doi": "10.1063/5.0059362",
        "themes": [
            "dsrg"
        ],
        "digest": "We report a spin-free formulation of the multireference DSRG based on ensemble normal ordering and benchmark it on 33 first-row diatomic molecules. In its first application to transition-metal complexes, we obtain spin splittings of [Fe(H₂O)₆]²⁺ and [Fe(NH₃)₆]²⁺ in agreement with local coupled-cluster results."
    },
    {
        "title": "Simulating Many-Body Systems with a Projective Quantum Eigensolver",
        "authors": "N. H. Stair, F. A. Evangelista",
        "venue": "PRX Quantum",
        "year": 2021,
        "doi": "10.1103/prxquantum.2.030301",
        "themes": [
            "quantum"
        ],
        "digest": "We introduce the projective quantum eigensolver, a reformulation of variational quantum algorithms that permits the study of strongly correlated systems with one to two orders of magnitude fewer measurements."
    },
    {
        "title": "Analytic Energy Gradients for the Driven Similarity Renormalization Group Multireference Second-Order Perturbation Theory",
        "authors": "S. Wang, C. Li, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2021,
        "doi": "10.1021/acs.jctc.1c00980",
        "themes": [
            "dsrg"
        ],
        "digest": "We derive analytic energy gradients for DSRG second-order multireference perturbation theory using Lagrange multipliers, at a cost that scales as a single energy computation, and report geometries of the singlet and triplet states of p-benzyne."
    },
    {
        "title": "Tuning the Quantum Dot (QD)/Mediator Interface for Optimal Efficiency of QD-Sensitized Near-Infrared-to-Visible Photon Upconversion Systems",
        "authors": "Z. Xu, Z. Huang, C. Li, T. Huang, F. A. Evangelista, M. L. Tang, T. T. Lian",
        "venue": "ACS Appl. Mater. Interfaces",
        "year": 2020,
        "doi": "10.1021/acsami.0c10269",
        "themes": [
            "applications"
        ],
        "digest": "Transient absorption measurements on PbS quantum-dot upconversion systems show that the quantum dot–mediator distance has opposite effects on the efficiencies of the first and second triplet energy-transfer steps, informing the design of more efficient systems."
    },
    {
        "title": "Psi4 1.4: Open-source software for high-throughput quantum chemistry",
        "authors": "D. G. A. Smith, L. A. Burns, A. C. Simmonett, R. M. Parrish, M. C. Schieber, R. Galvelis, P. Kraus, H. Kruse, R. D. Remigio, A. Alenaizan, A. M. James, S. Lehtola, J. P. Misiewicz, M. Scheurer, R. A. Shaw, J. B. Schriber, Y. Xie, Z. L. Glick, D. A. Sirianni, J. O'Brien, J. M. Waldrop, A. Kumar, E. G. Hohenstein, B. P. Pritchard, B. R. Brooks, H. F. Schaefer, A. Y. Sokolov, K. Patkowski, A. E. DePrince, U. Bozkaya, R. A. King, F. A. Evangelista, J. M. Turney, T. D. Crawford, C. D. Sherrill",
        "venue": "J. Chem. Phys.",
        "year": 2020,
        "doi": "10.1063/5.0006002",
        "themes": [
            "software"
        ],
        "digest": "This paper describes Psi4 1.4, an open-source electronic structure program with a Python interface, support for the MolSSI QCSchema format, and a redesigned driver suited to distributed high-throughput computation."
    },
    {
        "title": "Exploring Hilbert space on a budget: Novel benchmark set and performance metric for testing electronic structure methods in the regime of strong correlation",
        "authors": "N. H. Stair, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2020,
        "doi": "10.1063/5.0014928",
        "themes": [
            "sci"
        ],
        "digest": "We introduce a benchmark set of hydrogen models of different dimensionality and an accuracy-volume metric to measure how efficiently selected CI, singular value decomposition, and DMRG compress full CI wave functions in the strong-correlation regime."
    },
    {
        "title": "Correlating AGP on a quantum computer",
        "authors": "A. Khamoshi, F. A. Evangelista, G. E. Scuseria",
        "venue": "Quantum Sci. Technol.",
        "year": 2020,
        "doi": "10.1088/2058-9565/abc1bb",
        "themes": [
            "quantum"
        ],
        "digest": "It is shown that the antisymmetrized geminal power can be prepared on a quantum computer with circuit depth, CNOT count, and number of measurements linear in system size. A unitary correlator built on this reference gives accurate energies for the pairing Hamiltonian in all correlation regimes."
    },
    {
        "title": "Connected three-body terms in single-reference unitary many-body theories: Iterative and perturbative approximations",
        "authors": "C. Li, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2020,
        "doi": "10.1063/5.0008353",
        "themes": [
            "formalism",
            "quantum"
        ],
        "digest": "We develop approaches to include connected three-body terms in unitary many-body theories within the DSRG. The LDSRG(3)-2 scheme has the cost of CCSDT but is more accurate, and the qDSRG(2)+(T) method matches CCSD(T) for 28 atoms and small molecules."
    },
    {
        "title": "A zeroth-order active-space frozen-orbital embedding scheme for multireference calculations",
        "authors": "N. He, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2020,
        "doi": "10.1063/1.5142481",
        "themes": [
            "embedding"
        ],
        "digest": "We introduce ASET(0), a zeroth-order active-space embedding theory based on a frozen-orbital treatment of the environment, and combine it with DSRG-MRPT2. We apply it to the singlet–triplet gaps of benzyne diradicals adsorbed on NaCl and find it accurate for weak to moderate fragment–environment coupling."
    },
    {
        "title": "A Multireference Quantum Krylov Algorithm for Strongly Correlated Electrons",
        "authors": "N. H. Stair, R. Huang, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2020,
        "doi": "10.1021/acs.jctc.9b01125",
        "themes": [
            "quantum"
        ],
        "digest": "We introduce the multireference selected quantum Krylov algorithm as a low-cost alternative to quantum phase estimation. Its basis is generated by real-time evolution without parameter optimization, and benchmarks on H₆, H₈, and BeH₂ show accurate energies with compact bases."
    },
    {
        "title": "Time dependent adaptive configuration interaction applied to attosecond charge migration",
        "authors": "J. B. Schriber, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2019,
        "doi": "10.1063/1.5126945",
        "themes": [
            "sci",
            "xray"
        ],
        "digest": "We present a time-dependent formulation of adaptive configuration interaction for electron dynamics. Applied to attosecond charge migration following ionization, it reproduces the experimentally observed dynamics in iodoacetylene."
    },
    {
        "title": "Multireference Theories of Electron Correlation Based on the Driven Similarity Renormalization Group",
        "authors": "C. Li, F. A. Evangelista",
        "venue": "Annu. Rev. Phys. Chem.",
        "year": 2019,
        "doi": "10.1146/annurev-physchem-042018-052416",
        "themes": [
            "dsrg",
            "perspectives"
        ],
        "digest": "In this review we give a pedagogical introduction to multireference theories based on the driven similarity renormalization group, discuss their formal properties and extensions in detail, and present illustrative applications."
    },
    {
        "title": "Improving the Efficiency of the Multireference Driven Similarity Renormalization Group via Sequential Transformation, Density Fitting, and the Noninteracting Virtual Orbital Approximation",
        "authors": "T. Zhang, C. Li, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2019,
        "doi": "10.1021/acs.jctc.9b00353",
        "themes": [
            "dsrg"
        ],
        "digest": "We reduce the cost of the MR-LDSRG(2) method to near that of CCSD, without loss of accuracy, through a sequential transformation, density fitting, and a noninteracting virtual orbital approximation, permitting computations with more than 550 basis functions."
    },
    {
        "title": "Exact parameterization of fermionic wave functions via unitary coupled cluster theory",
        "authors": "F. A. Evangelista, G. K. Chan, G. E. Scuseria",
        "venue": "J. Chem. Phys.",
        "year": 2019,
        "doi": "10.1063/1.5133059",
        "themes": [
            "quantum",
            "formalism"
        ],
        "digest": "The exactness of unitary coupled-cluster parameterizations is analyzed. It is proven that a family of disentangled unitary coupled-cluster wave functions can represent any state, providing Trotter-error-free parameterizations for quantum computing."
    },
    {
        "title": "Dynamically weighted multireference perturbation theory: Combining the advantages of multi-state and state-averaged methods",
        "authors": "C. Li, R. H. Lindh, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2019,
        "doi": "10.1063/1.5088120",
        "themes": [
            "dsrg"
        ],
        "digest": "We introduce multi-state and dynamically weighted formulations of the DSRG. The dynamically weighted theory combines the advantages of multi-state and state-averaged methods, describing avoided crossings correctly and yielding improved excitation energies for acenes."
    },
    {
        "title": "Direct triplet sensitization of oligothiophene by quantum dots",
        "authors": "Z. Xu, T. Jin, Y. Huang, K. Mulla, F. A. Evangelista, E. Egap, T. T. Lian",
        "venue": "Chem. Sci.",
        "year": 2019,
        "doi": "10.1039/c9sc01648a",
        "themes": [
            "applications"
        ],
        "digest": "Oligothiophenes are introduced as triplet acceptors for quantum-dot-based photon upconversion. They are more stable and tunable than polyacenes, and the energy-transfer rate and efficiency increase with acceptor binding strength."
    },
    {
        "title": "Analytic gradients for the single-reference driven similarity renormalization group second-order perturbation theory",
        "authors": "S. Wang, C. Li, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2019,
        "doi": "10.1063/1.5100175",
        "themes": [
            "dsrg"
        ],
        "digest": "We derive analytic gradients for single-reference DSRG second-order perturbation theory, which scale as MP2 gradients. Bond lengths of 15 molecules agree with CCSD(T) values with a mean absolute error of 0.0033 Å."
    },
    {
        "title": "Perspective: Multireference coupled cluster theories of dynamical electron correlation",
        "authors": "F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2018,
        "doi": "10.1063/1.5039496",
        "themes": [
            "mrcc",
            "perspectives"
        ],
        "digest": "In this perspective we discuss recent progress and remaining challenges in multireference wave function methods for dynamical electron correlation, with emphasis on systematically improvable approaches beyond configuration interaction and perturbation theory."
    },
    {
        "title": "Psi4NumPy: An Interactive Quantum Chemistry Programming Environment for Reference Implementations and Rapid Development",
        "authors": "D. G. A. Smith, L. A. Burns, D. A. Sirianni, D. R. Nascimento, A. Kumar, A. M. James, J. B. Schriber, T. Zhang, B. Zhang, A. S. Abbott, E. J. Berquist, M. H. Lechner, L. A. Cunha, A. G. Heide, J. M. Waldrop, T. Y. Takeshita, A. Alenaizan, D. Neuhauser, R. A. King, A. C. Simmonett, J. M. Turney, H. F. Schaefer, F. A. Evangelista, A. E. DePrince, T. D. Crawford, K. Patkowski, C. D. Sherrill",
        "venue": "J. Chem. Theory Comput.",
        "year": 2018,
        "doi": "10.1021/acs.jctc.8b00286",
        "themes": [
            "software"
        ],
        "digest": "Psi4NumPy provides access to the efficient kernels of Psi4 through NumPy, enabling clear Python reference implementations of quantum chemical methods, many integrated with tutorials in Jupyter notebooks."
    },
    {
        "title": "Driven similarity renormalization group for excited states: A state-averaged perturbation theory",
        "authors": "C. Li, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2018,
        "doi": "10.1063/1.5019793",
        "themes": [
            "dsrg"
        ],
        "digest": "We generalize the multireference DSRG to a state-averaged formalism for quasi-degenerate excited states. The resulting second- and third-order perturbation theories are intruder-free and size-extensive, and the third-order results are consistent with multireference configuration interaction."
    },
    {
        "title": "Conjugated Oligomers with Stable Radical Substituents: Synthesis, Single Crystal Structures, Electronic Structure, and Excited State Dynamics",
        "authors": "Y. Huang, Z. Xu, S. Jin, C. Li, K. Warncke, F. A. Evangelista, T. T. Lian, E. Egap",
        "venue": "Chem. Mater.",
        "year": 2018,
        "doi": "10.1021/acs.chemmater.8b03366",
        "themes": [
            "applications"
        ],
        "digest": "A combined experimental and computational study of oligothiophenes bearing nitronyl nitroxide diradicals is reported. Low-lying, nearly degenerate singlet, triplet, and quintet states are identified as trap states responsible for rapid excited-state decay."
    },
    {
        "title": "A Combined Selected Configuration Interaction and Many-Body Treatment of Static and Dynamical Correlation in Oligoacenes",
        "authors": "J. B. Schriber, K. P. Hannon, C. Li, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2018,
        "doi": "10.1021/acs.jctc.8b00877",
        "themes": [
            "sci",
            "dsrg"
        ],
        "digest": "We combine adaptive configuration interaction with DSRG second-order perturbation theory to treat active spaces of up to 30 electrons in 30 orbitals. Singlet–triplet gaps of the oligoacenes agree with experiment, and the estimated radical character is reduced relative to valence-only treatments."
    },
    {
        "title": "Psi4 1.1: An Open-Source Electronic Structure Program Emphasizing Automation, Advanced Libraries, and Interoperability",
        "authors": "R. M. Parrish, L. A. Burns, D. G. A. Smith, A. C. Simmonett, A. E. DePrince, E. G. Hohenstein, U. Bozkaya, A. Y. Sokolov, R. D. Remigio, R. M. Richard, J. F. Gonthier, A. M. James, H. R. McAlexander, A. Kumar, M. Saitow, X. Wang, B. P. Pritchard, P. Verma, H. F. Schaefer, K. Patkowski, R. A. King, E. F. Valeev, F. A. Evangelista, J. M. Turney, T. D. Crawford, C. D. Sherrill",
        "venue": "J. Chem. Theory Comput.",
        "year": 2017,
        "doi": "10.1021/acs.jctc.7b00174",
        "themes": [
            "software"
        ],
        "digest": "This paper describes Psi4 1.1, which recasts the program as a Python module, automates complex workflows, simplifies interoperability with other software, and adds a range of new methods."
    },
    {
        "title": "Mapping the 3D orientation of piconewton integrin traction forces",
        "authors": "J. M. Brockman, A. T. Blanchard, V. P. Ma, W. D. Derricotte, Y. Zhang, M. E. Fay, W. A. Lam, F. A. Evangelista, A. L. Mattheyses, K. S. Salaita",
        "venue": "Nat. Methods",
        "year": 2017,
        "doi": "10.1038/nmeth.4536",
        "themes": [
            "applications"
        ],
        "digest": "Molecular force microscopy, based on molecular tension probes and fluorescence polarization, is introduced to measure the magnitude and three-dimensional orientation of piconewton cellular forces, revealing the alignment of integrin traction forces with force-bearing structures."
    },
    {
        "title": "Localized Intrinsic Valence Virtual Orbitals as a Tool for the Automatic Classification of Core Excited States",
        "authors": "W. D. Derricotte, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2017,
        "doi": "10.1021/acs.jctc.7b00493",
        "themes": [
            "xray"
        ],
        "digest": "We introduce localized intrinsic valence virtual orbitals for the automatic assignment of the orbitals involved in core excitations, providing atom- and shell-specific characterization illustrated for sulfur and oxygen K-edge spectra."
    },
    {
        "title": "Driven similarity renormalization group: Third-order multireference perturbation theory",
        "authors": "C. Li, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2017,
        "doi": "10.1063/1.4979016",
        "themes": [
            "dsrg"
        ],
        "digest": "We present a third-order multireference perturbation theory based on the DSRG that is intruder-free, size-consistent, and non-iterative. We compute the adiabatic singlet–triplet splitting of 9,10-anthracyne to within 0.1 kcal mol⁻¹ of multireference coupled-cluster results."
    },
    {
        "title": "Adaptive Configuration Interaction for Computing Challenging Electronic Excited States with Tunable Accuracy",
        "authors": "J. B. Schriber, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2017,
        "doi": "10.1021/acs.jctc.7b00725",
        "themes": [
            "sci"
        ],
        "digest": "We develop state-averaged and state-specific extensions of adaptive configuration interaction for excited states, including multielectron, charge-transfer, and near-degenerate states, with accuracy controlled by a user-specified threshold."
    },
    {
        "title": "A low-cost approach to electronic excitation energies based on the driven similarity renormalization group",
        "authors": "C. Li, P. Verma, K. P. Hannon, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2017,
        "doi": "10.1063/1.4997480",
        "themes": [
            "dsrg"
        ],
        "digest": "We propose an economical state-specific approach to excitation energies based on DSRG second-order perturbation theory. For 28 organic molecules its two variants attain accuracies comparable to TD-DFT (B3LYP) and EOM-CCSD, respectively."
    },
    {
        "title": "Towards numerically robust multireference theories: The driven similarity renormalization group truncated to one- and two-body operators",
        "authors": "C. Li, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2016,
        "doi": "10.1063/1.4947218",
        "themes": [
            "dsrg"
        ],
        "digest": "We introduce MR-LDSRG(2), the first nonperturbative version of the multireference DSRG. It is numerically robust, avoids the intruder-state problem, and is size-consistent, with accuracy comparable to multireference CI and multireference coupled-cluster methods."
    },
    {
        "title": "Communication: An adaptive configuration interaction approach for strongly correlated electrons with tunable accuracy",
        "authors": "J. B. Schriber, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2016,
        "doi": "10.1063/1.4948308",
        "themes": [
            "sci"
        ],
        "digest": "We introduce adaptive configuration interaction, in which the determinant space is iteratively expanded and coarse grained to a user-defined accuracy. We obtain potential energy curves of N₂ with nearly constant errors and singlet–triplet splittings of acenes up to decacene that agree with DMRG."
    },
    {
        "title": "An integral-factorized implementation of the driven similarity renormalization group second-order multireference perturbation theory",
        "authors": "K. P. Hannon, C. Li, F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2016,
        "doi": "10.1063/1.4951684",
        "themes": [
            "dsrg"
        ],
        "digest": "We report an implementation of DSRG second-order multireference perturbation theory based on factorized two-electron integrals that reduces the cost to that of MP2, and apply it to the singlet–triplet splittings of ten naphthyne isomers with basis sets up to quintuple-ζ quality."
    },
    {
        "title": "A Deterministic Projector Configuration Interaction Approach for the Ground State of Quantum Many-Body Systems",
        "authors": "T. Zhang, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2016,
        "doi": "10.1021/acs.jctc.6b00639",
        "themes": [
            "sci"
        ],
        "digest": "We introduce projector configuration interaction, a deterministic analogue of FCIQMC. Controlled by a single threshold, it attains chemical accuracy for N₂ with less than 0.5% of the full CI space and treats C₂ with wave functions of up to 200 million determinants."
    },
    {
        "title": "Simulation of X-ray absorption spectra with orthogonality constrained density functional theory",
        "authors": "W. D. Derricotte, F. A. Evangelista",
        "venue": "Phys. Chem. Chem. Phys.",
        "year": 2015,
        "doi": "10.1039/c4cp05509h",
        "themes": [
            "xray"
        ],
        "digest": "We extend orthogonality-constrained density functional theory to core-excited states. Excitation energies of first- and second-row elements are obtained with near-uniform accuracy and little dependence on the functional, and we simulate the near-edge spectra of adenine and thymine."
    },
    {
        "title": "Predicting Near Edge X-ray Absorption Spectra with the Spin-Free Exact-Two-Component Hamiltonian and Orthogonality Constrained Density Functional Theory",
        "authors": "P. Verma, W. D. Derricotte, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2015,
        "doi": "10.1021/acs.jctc.5b00817",
        "themes": [
            "xray",
            "relativistic"
        ],
        "digest": "We combine a spin-free exact two-component treatment of scalar relativistic effects with orthogonality-constrained DFT, reducing the mean error for core–valence excitations of second-row elements from 10.3 to 2.3 eV, and reproduce the near-edge spectra of three organotitanium complexes."
    },
    {
        "title": "Multireference Driven Similarity Renormalization Group: A Second-Order Perturbative Analysis",
        "authors": "C. Li, F. A. Evangelista",
        "venue": "J. Chem. Theory Comput.",
        "year": 2015,
        "doi": "10.1021/acs.jctc.5b00134",
        "themes": [
            "dsrg"
        ],
        "digest": "We introduce a multireference formulation of the DSRG and analyze it at second order. The resulting DSRG-MRPT2 is non-iterative, requires at most the three-body cumulant, and is free of the intruder-state problem."
    },
    {
        "title": "Calculations of Mode-Specific Tunneling of Double-Hydrogen Transfer in Porphycene Agree with and Illuminate Experiment",
        "authors": "Z. Homayoon, J. M. Bowman, F. A. Evangelista",
        "venue": "J. Phys. Chem. Lett.",
        "year": 2014,
        "doi": "10.1021/jz501482v",
        "themes": [
            "applications"
        ],
        "digest": "Mode-specific tunneling splittings for double-hydrogen transfer in porphycene are computed with a parameter-free reaction-path method that includes all 108 normal modes, in agreement with experiment."
    },
    {
        "title": "Adaptive multiconfigurational wave functions",
        "authors": "F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2014,
        "doi": "10.1063/1.4869192",
        "themes": [
            "sci"
        ],
        "digest": "We introduce Λ-CI wave functions, defined by a single energy cutoff. They adapt to single- and multireference states and provide compact model spaces for subsequent multireference coupled-cluster computations."
    },
    {
        "title": "A driven similarity renormalization group approach to quantum many-body problems",
        "authors": "F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2014,
        "doi": "10.1063/1.4890660",
        "themes": [
            "dsrg"
        ],
        "digest": "We introduce the driven similarity renormalization group as an alternative to the similarity renormalization group in which the flow is driven by a source operator, replacing differential equations with polynomial ones. Properties of diatomic molecules agree well with CCSD(T)."
    },
    {
        "title": "Orthogonality Constrained Density Functional Theory for Electronic Excited States",
        "authors": "F. A. Evangelista, P. G. Shushkov, J. C. Tully",
        "venue": "J. Phys. Chem. A",
        "year": 2013,
        "doi": "10.1021/jp401323d",
        "themes": [
            "xray"
        ],
        "digest": "Orthogonality-constrained density functional theory is introduced for excited states, in which a ground-state computation is augmented with orthogonality constraints. Its accuracy is comparable to TD-DFT, and charge-transfer excitations are described correctly."
    },
    {
        "title": "Is cyclobutadiene really highly destabilized by antiaromaticity?",
        "authors": "J. I. Wu, Y. Mo, F. A. Evangelista, P. v. R. Schleyer",
        "venue": "Chem. Commun.",
        "year": 2012,
        "doi": "10.1039/c2cc33521b",
        "themes": [
            "applications"
        ],
        "digest": "It is shown that the high energy of cyclobutadiene arises primarily from ring strain, estimated at about 60 kcal mol⁻¹, rather than from antiaromaticity, estimated at about 16.5 kcal mol⁻¹."
    },
    {
        "title": "A sequential transformation approach to the internally contracted multireference coupled cluster method",
        "authors": "F. A. Evangelista, M. Hanauer, A. Köhn, J. Gauß",
        "venue": "J. Chem. Phys.",
        "year": 2012,
        "doi": "10.1063/1.4718704",
        "themes": [
            "mrcc"
        ],
        "digest": "The internally contracted multireference coupled-cluster method is reformulated using a sequential transformation of the reference. The resulting approximations reproduce the ic-MRCC results closely, and the equivalence of the two formulations is proven."
    },
    {
        "title": "Psi4: an open‐source ab initio electronic structure program",
        "authors": "J. M. Turney, A. C. Simmonett, R. M. Parrish, E. G. Hohenstein, F. A. Evangelista, J. T. Fermann, B. J. Mintz, L. A. Burns, J. J. Wilke, M. L. Abrams, N. J. Russ, M. L. Leininger, C. L. Janssen, E. T. Seidl, W. D. Allen, H. F. Schaefer, R. A. King, E. F. Valeev, C. D. Sherrill, T. D. Crawford",
        "venue": "WIREs Comput. Mol. Sci.",
        "year": 2011,
        "doi": "10.1002/wcms.93",
        "themes": [
            "software"
        ],
        "digest": "This paper describes Psi4, an open-source program for ab initio electronic structure theory, from Hartree–Fock and DFT to configuration interaction and coupled cluster, designed for efficiency on parallel architectures and with Python-based input."
    },
    {
        "title": "On the approximation of the similarity-transformed Hamiltonian in single-reference and multireference coupled cluster theory",
        "authors": "F. A. Evangelista, J. Gauß",
        "venue": "Chem. Phys.",
        "year": 2011,
        "doi": "10.1016/j.chemphys.2011.08.006",
        "themes": [
            "mrcc"
        ]
    },
    {
        "title": "An orbital-invariant internally contracted multireference coupled cluster approach",
        "authors": "F. A. Evangelista, J. Gauß",
        "venue": "J. Chem. Phys.",
        "year": 2011,
        "doi": "10.1063/1.3559149",
        "themes": [
            "mrcc"
        ],
        "digest": "An internally contracted multireference coupled-cluster method is formulated to address the cost scaling with the number of references and the lack of orbital invariance of methods based on the Jeziorski–Monkhorst ansatz. Invariance with respect to active-orbital rotations is shown formally and numerically."
    },
    {
        "title": "Alternative single-reference coupled cluster approaches for multireference problems: The simpler, the better",
        "authors": "F. A. Evangelista",
        "venue": "J. Chem. Phys.",
        "year": 2011,
        "doi": "10.1063/1.3598471",
        "themes": [
            "mrcc"
        ],
        "digest": "Extended, unitary, and variational coupled-cluster theories are implemented to arbitrary order and compared with multireference coupled cluster. They improve on traditional coupled cluster but are not competitive when cost is taken into account."
    },
    {
        "title": "Why Are Perfluorocyclobutadiene and Some Other (CF)nq Rings Non-Planar?",
        "authors": "J. I. Wu, F. A. Evangelista, P. v. R. Schleyer",
        "venue": "Org. Lett.",
        "year": 2010,
        "doi": "10.1021/ol902866n",
        "themes": [
            "applications"
        ],
        "digest": "The nonplanarity of perfluorocyclobutadiene is attributed to reduced antiaromaticity and relief of eclipsing C–F interactions; several other (CF)ₙ rings are shown to be nonplanar as well."
    },
    {
        "title": "Perturbative triples corrections in state-specific multireference coupled cluster theory",
        "authors": "F. A. Evangelista, E. Prochnow, J. Gauß, H. F. Schaefer",
        "venue": "J. Chem. Phys.",
        "year": 2010,
        "doi": "10.1063/1.3305335",
        "themes": [
            "mrcc"
        ],
        "digest": "A perturbative triples correction for state-specific multireference coupled cluster with singles and doubles, Mk-MRCCSD(T), is derived from the stationary conditions of the energy functional and applied to BeH₂, F₂, ozone, and 2,6-pyridyne."
    },
    {
        "title": "Low-Lying Triplet States of Diphosphene and Diphosphinylidene",
        "authors": "T. Lu, Q. Hao, A. C. Simmonett, F. A. Evangelista, Y. Yamaguchi, D. Fang, H. F. Schaefer",
        "venue": "J. Phys. Chem. A",
        "year": 2010,
        "doi": "10.1021/jp105281w",
        "themes": [
            "applications"
        ],
        "digest": "Six low-lying triplet states of P₂H₂ are characterized with methods up to multireference coupled cluster, and the triplet potential energy surface, including isomerization barriers and the crossing with the singlet surface, is reported."
    },
    {
        "title": "Insights into the orbital invariance problem in state-specific multireference coupled cluster theory",
        "authors": "F. A. Evangelista, J. Gauß",
        "venue": "J. Chem. Phys.",
        "year": 2010,
        "doi": "10.1063/1.3456546",
        "themes": [
            "mrcc"
        ],
        "digest": "Numerical evidence is presented that state-specific multireference coupled cluster is not orbital invariant even when the excitation manifold spans the same space for each reference. The Mk-MRCCSDtq truncation is introduced and found to be highly accurate."
    },
    {
        "title": "Characterization of the BNNO Radical",
        "authors": "Q. Cheng, A. C. Simmonett, F. A. Evangelista, Y. Yamaguchi, H. F. Schaefer",
        "venue": "J. Chem. Theory Comput.",
        "year": 2010,
        "doi": "10.1021/ct1001285",
        "themes": [
            "applications"
        ],
        "digest": "The isomers of the BNNO radical and their interconversion are characterized with coupled-cluster methods. Comparison with experimental vibrational frequencies indicates that the reaction of boron with N₂O forms the trans isomer rather than the cyclic global minimum."
    },
    {
        "title": "Analytic gradients for Mukherjee’s multireference coupled-cluster method using two-configurational self-consistent-field orbitals",
        "authors": "T. Jagau, E. Prochnow, F. A. Evangelista, J. Gauß",
        "venue": "J. Chem. Phys.",
        "year": 2010,
        "doi": "10.1063/1.3370847",
        "themes": [
            "mrcc"
        ],
        "digest": "Analytic gradients for state-specific multireference coupled cluster are extended to two-configurational SCF orbitals, and the influence of the orbitals on the equilibrium structures of arynes and nitrenes is examined."
    },
    {
        "title": "Water Dimer Radical Cation: Structures, Vibrational Frequencies, and Energetics",
        "authors": "Q. Cheng, F. A. Evangelista, A. C. Simmonett, Y. Yamaguchi, H. F. Schaefer",
        "venue": "J. Phys. Chem. A",
        "year": 2009,
        "doi": "10.1021/jp907715a",
        "themes": [
            "applications"
        ],
        "digest": "Fourteen stationary points of the water dimer radical cation are characterized with coupled-cluster methods. The computed adiabatic ionization energy, 10.81 eV, agrees with the experimental value."
    },
    {
        "title": "Diphosphene and Diphosphinylidene",
        "authors": "T. Lu, A. C. Simmonett, F. A. Evangelista, Y. Yamaguchi, H. F. Schaefer",
        "venue": "J. Phys. Chem. A",
        "year": 2009,
        "doi": "10.1021/jp904028a",
        "themes": [
            "applications"
        ],
        "digest": "The isomers of P₂H₂ and their interconversion are studied systematically. trans-Diphosphene is confirmed as the global minimum, and the multireference character of the trans–cis isomerization transition state is examined."
    },
    {
        "title": "Analytic gradients for the state-specific multireference coupled cluster singles and doubles model",
        "authors": "E. Prochnow, F. A. Evangelista, H. F. Schaefer, W. D. Allen, J. Gauß",
        "venue": "J. Chem. Phys.",
        "year": 2009,
        "doi": "10.1063/1.3204017",
        "themes": [
            "mrcc"
        ],
        "digest": "The general theory of analytic energy gradients for state-specific multireference coupled cluster is presented, together with an implementation with proper scaling, and applied to the equilibrium geometries of pyridyne isomers."
    },
    {
        "title": "A companion perturbation theory for state-specific multireference coupled cluster methods",
        "authors": "F. A. Evangelista, A. C. Simmonett, H. F. Schaefer, D. Mukherjee, W. D. Allen",
        "venue": "Phys. Chem. Chem. Phys.",
        "year": 2009,
        "doi": "10.1039/b822910d",
        "themes": [
            "mrcc"
        ],
        "digest": "A companion second-order perturbation theory for state-specific multireference coupled cluster, Mk-MRPT2, is derived and implemented, and shown to be useful in multireference focal-point extrapolations to the ab initio limit."
    },
    {
        "title": "Triple excitations in state-specific multireference coupled cluster theory: Application of Mk-MRCCSDT and Mk-MRCCSDT-n methods to model systems",
        "authors": "F. A. Evangelista, A. C. Simmonett, W. D. Allen, H. F. Schaefer, J. Gauß",
        "venue": "J. Chem. Phys.",
        "year": 2008,
        "doi": "10.1063/1.2834927",
        "themes": [
            "mrcc"
        ],
        "digest": "The first implementation with correct scaling of state-specific multireference coupled cluster with approximate and full triple excitations is reported. The approximate triples recover 59–73% of the full triples effect and substantially reduce nonparallelism errors."
    },
    {
        "title": "Short Intramolecular Hydrogen Bonds: Derivatives of Malonaldehyde with Symmetrical Substituents",
        "authors": "J. C. Hargis, F. A. Evangelista, J. B. Ingels, H. F. Schaefer",
        "venue": "J. Am. Chem. Soc.",
        "year": 2008,
        "doi": "10.1021/ja8060672",
        "themes": [
            "applications"
        ],
        "digest": "Derivatives of malonaldehyde with very short intramolecular hydrogen bonds are studied with coupled-cluster methods; two compounds have hydrogen-transfer barriers below 1 kcal mol⁻¹, and a relation between DFT and coupled-cluster barriers is proposed."
    },
    {
        "title": "In search of definitive signatures of the elusive NCCO radical",
        "authors": "A. C. Simmonett, F. A. Evangelista, W. D. Allen, H. F. Schaefer",
        "venue": "J. Chem. Phys.",
        "year": 2007,
        "doi": "10.1063/1.2747241",
        "themes": [
            "applications"
        ],
        "digest": "Fundamental vibrational frequencies of the NCCO radical computed at the CCSD(T) level differ markedly from earlier experimental assignments. A new enthalpy of formation for NCCO is recommended."
    },
    {
        "title": "Coupling term derivation and general implementation of state-specific multireference coupled cluster theories",
        "authors": "F. A. Evangelista, W. D. Allen, H. F. Schaefer",
        "venue": "J. Chem. Phys.",
        "year": 2007,
        "doi": "10.1063/1.2743014",
        "themes": [
            "mrcc"
        ],
        "digest": "Closed-form expressions are derived for the coupling terms of state-specific multireference coupled cluster, and the first production-level implementation is reported and applied to F₂, ozone, and the benzynes."
    },
    {
        "title": "Hydrogen Atom and Hydride Anion Addition to Adenine: Structures and Energetics",
        "authors": "F. A. Evangelista, H. F. Schaefer",
        "venue": "ChemPhysChem",
        "year": 2006,
        "doi": "10.1002/cphc.200600049",
        "themes": [
            "applications"
        ],
        "digest": "Radicals and anions formed by hydrogen-atom and hydride addition to adenine are studied with density functional theory, and their electron affinities and detachment energies are reported for the first time."
    },
    {
        "title": "High-order excitations in state-universal and state-specific multireference coupled cluster theories: Model systems",
        "authors": "F. A. Evangelista, W. D. Allen, H. F. Schaefer",
        "venue": "J. Chem. Phys.",
        "year": 2006,
        "doi": "10.1063/1.2357923",
        "themes": [
            "mrcc"
        ],
        "digest": "High-order excitations are studied for the first time in state-universal and state-specific multireference coupled-cluster theories. Connected triples reduce nonparallelism errors by factors of 2–10, and quadruples bring energies within 1 kcal mol⁻¹ of full CI."
    },
    {
        "title": "Structures and Energetics of Adenosine Radicals: (2‘-dAdo − H)•",
        "authors": "F. A. Evangelista, H. F. Schaefer",
        "venue": "J. Phys. Chem. A",
        "year": 2004,
        "doi": "10.1021/jp040361r",
        "themes": [
            "applications"
        ],
        "digest": "Radicals and anions derived from 2′-deoxyadenosine are studied with density functional theory. Large electron affinities are predicted, and the dissociative character of several anions is discussed in relation to DNA damage."
    },
    {
        "title": "Radicals Derived from Adenine: Prediction of Large Electron Affinities with a Considerable Spread",
        "authors": "F. A. Evangelista, A. Paul, H. F. Schaefer",
        "venue": "J. Phys. Chem. A",
        "year": 2004,
        "doi": "10.1021/jp031210b",
        "themes": [
            "applications"
        ],
        "digest": "Electron affinities of five adenine radicals are predicted with calibrated density functional methods, ranging from 0.9 to 3.2 eV; nitrogen-centered radicals are the most stable."
    }
];
