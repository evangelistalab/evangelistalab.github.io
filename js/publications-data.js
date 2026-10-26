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
        "venue": "Physical Review Letters",
        "year": 2026,
        "doi": "10.1103/nyxb-nqtq",
        "themes": [
            "xray",
            "relativistic"
        ]
    },
    {
        "title": "The Python simulations of chemistry framework: 10 years of an open-source quantum chemistry project",
        "authors": "Q. Sun, M. R. Hermes, X. Wu, H. Zhai, X. Zhang, A. M. Ahmed, J. J. Aucar, O. J. Backhouse, S. Banerjee, P. Bao, N. A. Bogdanov, K. Bystrom, F. Chapoton, N. Chen, I. Y. Chernyshov, H. Clifford, S. J. Cohen‐Janes, Z. Cui, Y. Damour, N. Dattani, L. B. Dittmer, S. Ehlert, J. J. Eriksen, F. A. Evangelista, S. Ewing, A. Farahvash, K. Focke, Y. Gao, K. E. Gasperich, N. Gillispie, J. Greiner, M. R. Hennefarth, J. Hermann, C. Hillenbrand, J. Huhtasalo, B. Ibrahim, B. Jangid, A. N. Javaremi, A. J. Jenkins, Y. Jin, D. S. King, D. P. Kooi, J. S. Kurian, H. R. Larsson, B. T. G. Lau, S. Lee, S. Lehtola, C. Li, H. Li, J. Li, R. Li, S. Li, Л. А. Олегович, A. Mahajan, N. Mauger, P. d. Mazo‐Sevillano, J. E. Moussa, K. Nakano, V. A. Neufeld, L. Peng, H. V. Pham, P. Pinski, P. Pokhilko, Z. Pu, Y. Qian, S. J. Quiton, W. T. Schulze, T. R. Scott, A. Seal, J. D. Serna, J. E. T. Smith, K. E. Smyser, T. Stahl, C. Sun, K. J. Sung, E. Trushin, S. Upadhyay, E. Vo, T. Vogels, S. Wang, T. F. Wang, X. Wang, X. Wang, Y. Wang, M. J. Williamson, J. Yang, H. Ye, C. Yeh, H. Yu, J. Yu, V. W. Yu, C. Zhang, D. Zhang, Y. Zhang, Z. Zhao, Z. Zhou, Z. Zhu, T. Zhu, T. C. Berkelbach, L. Gagliardi",
        "venue": "The Journal of Chemical Physics",
        "year": 2026,
        "doi": "10.1063/5.0337441",
        "themes": [
            "software"
        ]
    },
    {
        "title": "Symmetry dilemmas in quantum computing for chemistry: A comprehensive analysis",
        "authors": "I. Magoulas, M. Zhang, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2026,
        "doi": "10.1063/5.0316482",
        "themes": [
            "quantum"
        ]
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
        "preprint": true
    },
    {
        "title": "One-Step Relativistic Driven Similarity Renormalization Group Multireference Perturbation Theory",
        "authors": "Z. Zhao, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2026,
        "doi": "10.1021/acs.jctc.6c00935",
        "themes": [
            "dsrg",
            "relativistic"
        ]
    },
    {
        "title": "Discerning Mode-Controlled Relaxation Pathways in Photoionized Methane via X-ray Transient Absorption Spectroscopy",
        "authors": "K. Marin, F. A. Evangelista",
        "venue": "Journal of the American Chemical Society",
        "year": 2026,
        "doi": "10.1021/jacs.6c07197",
        "themes": [
            "xray",
            "applications"
        ]
    },
    {
        "title": "Clifford transformations for fermionic quantum systems: From Pauli and Majorana operators to Dirac fermions",
        "authors": "I. Magoulas, F. A. Evangelista",
        "venue": "Physical Review A",
        "year": 2026,
        "doi": "10.1103/y52r-pd4y",
        "themes": [
            "quantum",
            "formalism"
        ]
    },
    {
        "title": "Advancing Reproducibility and Open Data in Theoretical and Computational Chemistry",
        "authors": "R. E. Amaro, V. S. Batista, J. Blumberger, Y. S. Choong, C. Corminbœuf, Z. Cournia, Q. Cui, M. D. Vivo, F. A. Evangelista, Y. Q. Gao, D. Ghosh, X. D. He, O. Isayev, S. Khalid, J. Kirchmair, J. R. Kitchin, H. Liu, K. J. Naidoo, D. D. Nguyen, A. Nunes‐Alves, G. Palermo, B. Savoie, T. A. Soares, P. Tiwary, G. Wei, X. Zheng, T. Zhu, K. M. Merz, L. Gagliardi",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2026,
        "doi": "10.1021/acs.jctc.6c00733",
        "themes": [
            "perspectives",
            "software"
        ]
    },
    {
        "title": "Thermal Weight Determination and Interstate Coupling in State-Averaged ADAPT-VQE",
        "authors": "H. R. Grimsley, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2025,
        "doi": "10.1021/acs.jctc.5c01313",
        "themes": [
            "quantum"
        ]
    },
    {
        "title": "Spin-Adapted Fermionic Unitaries: From Lie Algebras to Compact Quantum Circuits",
        "authors": "I. Magoulas, F. A. Evangelista",
        "venue": "arXiv (Cornell University)",
        "year": 2025,
        "doi": "10.48550/arxiv.2511.13485",
        "themes": [
            "quantum",
            "formalism"
        ],
        "preprint": true
    },
    {
        "title": "Mutual Correlation",
        "authors": "F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2025,
        "doi": "10.1021/acs.jctc.5c00766",
        "themes": [
            "formalism"
        ]
    },
    {
        "title": "Multireference Equation-of-Motion Driven Similarity Renormalization Group: Theoretical Foundations and Applications to Ionized States",
        "authors": "Z. Zhao, S. Li, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2025,
        "doi": "10.1021/acs.jctc.5c00992",
        "themes": [
            "dsrg",
            "xray"
        ]
    },
    {
        "title": "Exact closed-form unitary transformations of fermionic operators",
        "authors": "F. A. Evangelista, I. Magoulas",
        "venue": "Physical Review A",
        "year": 2025,
        "doi": "10.1103/physreva.111.042825",
        "themes": [
            "formalism",
            "quantum"
        ]
    },
    {
        "title": "Equation-of-motion internally contracted multireference unitary coupled-cluster theory",
        "authors": "S. Li, Z. Zhao, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2025,
        "doi": "10.1063/5.0261000",
        "themes": [
            "mrcc",
            "quantum"
        ]
    },
    {
        "title": "Electronic Structure and Spectroscopy of CuBe",
        "authors": "A. Rodriguez, S. Vadachkoria, F. A. Evangelista, M. C. Heaven",
        "venue": "The Journal of Physical Chemistry A",
        "year": 2025,
        "doi": "10.1021/acs.jpca.4c08565",
        "themes": [
            "applications",
            "relativistic"
        ]
    },
    {
        "title": "Editorial: 100 Years of Quantum Mechanics - All About Molecules",
        "authors": "E. Mátyus, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2025,
        "doi": "10.1021/acs.jctc.5c00702",
        "themes": [
            "perspectives"
        ]
    },
    {
        "title": "Closed-form expressions for unitaries of spin-adapted fermionic operators",
        "authors": "I. Magoulas, F. A. Evangelista",
        "venue": "Molecular Physics",
        "year": 2025,
        "doi": "10.1080/00268976.2025.2534672",
        "themes": [
            "formalism",
            "quantum"
        ]
    },
    {
        "title": "An Improved Virtual Orbital Driven Similarity Renormalization Group Approach for Core-Ionized and Core-Excited States",
        "authors": "M. Huang, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2025,
        "doi": "10.1021/acs.jctc.5c00457",
        "themes": [
            "dsrg",
            "xray"
        ]
    },
    {
        "title": "Toward Accurate Spin–Orbit Splittings from Relativistic Multireference Electronic Structure Theory",
        "authors": "Z. Zhao, F. A. Evangelista",
        "venue": "The Journal of Physical Chemistry Letters",
        "year": 2024,
        "doi": "10.1021/acs.jpclett.4c01372",
        "themes": [
            "relativistic",
            "dsrg"
        ]
    },
    {
        "title": "Implementation of the Projective Quantum Eigensolver on a Quantum Computer",
        "authors": "J. P. Misiewicz, F. A. Evangelista",
        "venue": "The Journal of Physical Chemistry A",
        "year": 2024,
        "doi": "10.1021/acs.jpca.3c07429",
        "themes": [
            "quantum"
        ]
    },
    {
        "title": "Frozen Natural Orbitals for the State-Averaged Driven Similarity Renormalization Group",
        "authors": "C. Li, S. Mao, R. Huang, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2024,
        "doi": "10.1021/acs.jctc.4c00152",
        "themes": [
            "dsrg"
        ]
    },
    {
        "title": "Forte: A suite of advanced multireference quantum chemistry methods",
        "authors": "F. A. Evangelista, C. Li, P. Verma, K. P. Hannon, J. B. Schriber, T. Zhang, C. Cai, S. Wang, N. He, N. H. Stair, M. Huang, R. Huang, J. P. Misiewicz, S. Li, K. Marin, Z. Zhao, L. A. Burns",
        "venue": "The Journal of Chemical Physics",
        "year": 2024,
        "doi": "10.1063/5.0216512",
        "themes": [
            "software",
            "dsrg"
        ]
    },
    {
        "title": "Fermionic mean-field theory as a tool for studying spin Hamiltonians",
        "authors": "T. M. Henderson, B. Harrison, I. Magoulas, J. Necaise, A. M. Projansky, F. A. Evangelista, J. D. Whitfield, G. E. Scuseria",
        "venue": "The Journal of Chemical Physics",
        "year": 2024,
        "doi": "10.1063/5.0242219",
        "themes": [
            "formalism"
        ]
    },
    {
        "title": "Concluding remarks",
        "authors": "F. A. Evangelista",
        "venue": "Faraday Discussions",
        "year": 2024,
        "doi": "10.1039/d4fd00152d",
        "themes": [
            "perspectives"
        ]
    },
    {
        "title": "Challenging excited states from adaptive quantum eigensolvers: subspace expansions vs. state-averaged strategies",
        "authors": "H. R. Grimsley, F. A. Evangelista",
        "venue": "Quantum Science and Technology",
        "year": 2024,
        "doi": "10.1088/2058-9565/ad9fa2",
        "themes": [
            "quantum"
        ]
    },
    {
        "title": "Benchmark Study of Core-Ionization Energies with the Generalized Active Space-Driven Similarity Renormalization Group",
        "authors": "M. Huang, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2024,
        "doi": "10.1021/acs.jctc.4c00835",
        "themes": [
            "dsrg",
            "xray"
        ]
    },
    {
        "title": "Unitary Coupled Cluster: Seizing the Quantum Moment",
        "authors": "I. Magoulas, F. A. Evangelista",
        "venue": "The Journal of Physical Chemistry A",
        "year": 2023,
        "doi": "10.1021/acs.jpca.3c02781",
        "themes": [
            "quantum",
            "perspectives"
        ]
    },
    {
        "title": "Signatures of diradicals in x-ray absorption spectroscopy",
        "authors": "K. Marin, M. Huang, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2023,
        "doi": "10.1063/5.0140761",
        "themes": [
            "xray"
        ]
    },
    {
        "title": "Ring-Polymer Instanton Tunneling Splittings of Tropolone and Isotopomers using a Δ-Machine Learned CCSD(T) Potential: Theory and Experiment Shake Hands",
        "authors": "A. Nandi, G. Laude, S. S. Khire, N. D. Gurav, C. Qu, R. Conte, Q. Yu, S. Li, P. L. Houston, S. R. Gadre, J. O. Richardson, F. A. Evangelista, J. M. Bowman",
        "venue": "Journal of the American Chemical Society",
        "year": 2023,
        "doi": "10.1021/jacs.3c00769",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "Linear-Scaling Quantum Circuits for Computational Chemistry",
        "authors": "I. Magoulas, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2023,
        "doi": "10.1021/acs.jctc.3c00376",
        "themes": [
            "quantum"
        ]
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
        ]
    },
    {
        "title": "Intruder-free cumulant-truncated driven similarity renormalization group second-order multireference perturbation theory",
        "authors": "S. Li, J. P. Misiewicz, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2023,
        "doi": "10.1063/5.0159403",
        "themes": [
            "dsrg"
        ]
    },
    {
        "title": "Editorial: Quantum Computing for Chemistry",
        "authors": "F. A. Evangelista, V. S. Batista",
        "venue": "Journal of Chemical Theory and Computation",
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
        "venue": "The Journal of Physical Chemistry A",
        "year": 2023,
        "doi": "10.1021/acs.jpca.2c05844",
        "themes": [
            "embedding",
            "dsrg",
            "applications"
        ]
    },
    {
        "title": "CNOT-Efficient Circuits for Arbitrary Rank Many-Body Fermionic and Qubit Excitations",
        "authors": "I. Magoulas, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2023,
        "doi": "10.1021/acs.jctc.2c01016",
        "themes": [
            "quantum"
        ]
    },
    {
        "title": "A study of core-excited states of organic molecules computed with the generalized active space driven similarity renormalization group",
        "authors": "M. Huang, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2023,
        "doi": "10.1063/5.0137096",
        "themes": [
            "dsrg",
            "xray"
        ]
    },
    {
        "title": "Second-Order Active-Space Embedding Theory",
        "authors": "N. He, C. Li, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2022,
        "doi": "10.1021/acs.jctc.1c01099",
        "themes": [
            "embedding",
            "dsrg"
        ]
    },
    {
        "title": "QForte: An Efficient State-Vector Emulator and Quantum Algorithms Library for Molecular Electronic Structure",
        "authors": "N. H. Stair, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2022,
        "doi": "10.1021/acs.jctc.1c01155",
        "themes": [
            "software",
            "quantum"
        ]
    },
    {
        "title": "Automatic derivation of many-body theories based on general Fermi vacua",
        "authors": "F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2022,
        "doi": "10.1063/5.0097858",
        "themes": [
            "formalism",
            "software"
        ]
    },
    {
        "title": "AGP-based unitary coupled cluster theory for quantum computers",
        "authors": "A. Khamoshi, G. P. Chen, F. A. Evangelista, G. E. Scuseria",
        "venue": "Quantum Science and Technology",
        "year": 2022,
        "doi": "10.1088/2058-9565/ac93ae",
        "themes": [
            "quantum"
        ]
    },
    {
        "title": "Theoretical Calculation of Core-Excited States along Dissociative Pathways beyond Second-Order Perturbation Theory",
        "authors": "M. Huang, C. Li, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2021,
        "doi": "10.1021/acs.jctc.1c00884",
        "themes": [
            "xray",
            "dsrg",
            "sci"
        ]
    },
    {
        "title": "Spin-free formulation of the multireference driven similarity renormalization group: A benchmark study of first-row diatomic molecules and spin-crossover energetics",
        "authors": "C. Li, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2021,
        "doi": "10.1063/5.0059362",
        "themes": [
            "dsrg"
        ]
    },
    {
        "title": "Simulating Many-Body Systems with a Projective Quantum Eigensolver",
        "authors": "N. H. Stair, F. A. Evangelista",
        "venue": "PRX Quantum",
        "year": 2021,
        "doi": "10.1103/prxquantum.2.030301",
        "themes": [
            "quantum"
        ]
    },
    {
        "title": "Analytic Energy Gradients for the Driven Similarity Renormalization Group Multireference Second-Order Perturbation Theory",
        "authors": "S. Wang, C. Li, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2021,
        "doi": "10.1021/acs.jctc.1c00980",
        "themes": [
            "dsrg"
        ]
    },
    {
        "title": "Tuning the Quantum Dot (QD)/Mediator Interface for Optimal Efficiency of QD-Sensitized Near-Infrared-to-Visible Photon Upconversion Systems",
        "authors": "Z. Xu, Z. Huang, C. Li, T. Huang, F. A. Evangelista, M. L. Tang, T. T. Lian",
        "venue": "ACS Applied Materials & Interfaces",
        "year": 2020,
        "doi": "10.1021/acsami.0c10269",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "Psi4 1.4: Open-source software for high-throughput quantum chemistry",
        "authors": "D. G. A. Smith, L. A. Burns, A. C. Simmonett, R. M. Parrish, M. C. Schieber, R. Galvelis, P. Kraus, H. Kruse, R. D. Remigio, A. Alenaizan, A. M. James, S. Lehtola, J. P. Misiewicz, M. Scheurer, R. A. Shaw, J. B. Schriber, Y. Xie, Z. L. Glick, D. A. Sirianni, J. O'Brien, J. M. Waldrop, A. Kumar, E. G. Hohenstein, B. P. Pritchard, B. R. Brooks, H. F. Schaefer, A. Y. Sokolov, K. Patkowski, A. E. DePrince, U. Bozkaya, R. A. King, F. A. Evangelista, J. M. Turney, T. D. Crawford, C. D. Sherrill",
        "venue": "The Journal of Chemical Physics",
        "year": 2020,
        "doi": "10.1063/5.0006002",
        "themes": [
            "software"
        ]
    },
    {
        "title": "Exploring Hilbert space on a budget: Novel benchmark set and performance metric for testing electronic structure methods in the regime of strong correlation",
        "authors": "N. H. Stair, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2020,
        "doi": "10.1063/5.0014928",
        "themes": [
            "sci"
        ]
    },
    {
        "title": "Correlating AGP on a quantum computer",
        "authors": "A. Khamoshi, F. A. Evangelista, G. E. Scuseria",
        "venue": "Quantum Science and Technology",
        "year": 2020,
        "doi": "10.1088/2058-9565/abc1bb",
        "themes": [
            "quantum"
        ]
    },
    {
        "title": "Connected three-body terms in single-reference unitary many-body theories: Iterative and perturbative approximations",
        "authors": "C. Li, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2020,
        "doi": "10.1063/5.0008353",
        "themes": [
            "formalism",
            "quantum"
        ]
    },
    {
        "title": "A zeroth-order active-space frozen-orbital embedding scheme for multireference calculations",
        "authors": "N. He, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2020,
        "doi": "10.1063/1.5142481",
        "themes": [
            "embedding"
        ]
    },
    {
        "title": "A Multireference Quantum Krylov Algorithm for Strongly Correlated Electrons",
        "authors": "N. H. Stair, R. Huang, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2020,
        "doi": "10.1021/acs.jctc.9b01125",
        "themes": [
            "quantum"
        ]
    },
    {
        "title": "Time dependent adaptive configuration interaction applied to attosecond charge migration",
        "authors": "J. B. Schriber, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2019,
        "doi": "10.1063/1.5126945",
        "themes": [
            "sci",
            "xray"
        ]
    },
    {
        "title": "Multireference Theories of Electron Correlation Based on the Driven Similarity Renormalization Group",
        "authors": "C. Li, F. A. Evangelista",
        "venue": "Annual Review of Physical Chemistry",
        "year": 2019,
        "doi": "10.1146/annurev-physchem-042018-052416",
        "themes": [
            "dsrg",
            "perspectives"
        ]
    },
    {
        "title": "Improving the Efficiency of the Multireference Driven Similarity Renormalization Group via Sequential Transformation, Density Fitting, and the Noninteracting Virtual Orbital Approximation",
        "authors": "T. Zhang, C. Li, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2019,
        "doi": "10.1021/acs.jctc.9b00353",
        "themes": [
            "dsrg"
        ]
    },
    {
        "title": "Exact parameterization of fermionic wave functions via unitary coupled cluster theory",
        "authors": "F. A. Evangelista, G. K. Chan, G. E. Scuseria",
        "venue": "The Journal of Chemical Physics",
        "year": 2019,
        "doi": "10.1063/1.5133059",
        "themes": [
            "quantum",
            "formalism"
        ]
    },
    {
        "title": "Dynamically weighted multireference perturbation theory: Combining the advantages of multi-state and state-averaged methods",
        "authors": "C. Li, R. H. Lindh, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2019,
        "doi": "10.1063/1.5088120",
        "themes": [
            "dsrg"
        ]
    },
    {
        "title": "Direct triplet sensitization of oligothiophene by quantum dots",
        "authors": "Z. Xu, T. Jin, Y. Huang, K. Mulla, F. A. Evangelista, E. Egap, T. T. Lian",
        "venue": "Chemical Science",
        "year": 2019,
        "doi": "10.1039/c9sc01648a",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "Analytic gradients for the single-reference driven similarity renormalization group second-order perturbation theory",
        "authors": "S. Wang, C. Li, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2019,
        "doi": "10.1063/1.5100175",
        "themes": [
            "dsrg"
        ]
    },
    {
        "title": "Perspective: Multireference coupled cluster theories of dynamical electron correlation",
        "authors": "F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2018,
        "doi": "10.1063/1.5039496",
        "themes": [
            "mrcc",
            "perspectives"
        ]
    },
    {
        "title": "Psi4NumPy: An Interactive Quantum Chemistry Programming Environment for Reference Implementations and Rapid Development",
        "authors": "D. G. A. Smith, L. A. Burns, D. A. Sirianni, D. R. Nascimento, A. Kumar, A. M. James, J. B. Schriber, T. Zhang, B. Zhang, A. S. Abbott, E. J. Berquist, M. H. Lechner, L. A. Cunha, A. G. Heide, J. M. Waldrop, T. Y. Takeshita, A. Alenaizan, D. Neuhauser, R. A. King, A. C. Simmonett, J. M. Turney, H. F. Schaefer, F. A. Evangelista, A. E. DePrince, T. D. Crawford, K. Patkowski, C. D. Sherrill",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2018,
        "doi": "10.1021/acs.jctc.8b00286",
        "themes": [
            "software"
        ]
    },
    {
        "title": "Driven similarity renormalization group for excited states: A state-averaged perturbation theory",
        "authors": "C. Li, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2018,
        "doi": "10.1063/1.5019793",
        "themes": [
            "dsrg"
        ]
    },
    {
        "title": "Conjugated Oligomers with Stable Radical Substituents: Synthesis, Single Crystal Structures, Electronic Structure, and Excited State Dynamics",
        "authors": "Y. Huang, Z. Xu, S. Jin, C. Li, K. Warncke, F. A. Evangelista, T. T. Lian, E. Egap",
        "venue": "Chemistry of Materials",
        "year": 2018,
        "doi": "10.1021/acs.chemmater.8b03366",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "A Combined Selected Configuration Interaction and Many-Body Treatment of Static and Dynamical Correlation in Oligoacenes",
        "authors": "J. B. Schriber, K. P. Hannon, C. Li, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2018,
        "doi": "10.1021/acs.jctc.8b00877",
        "themes": [
            "sci",
            "dsrg"
        ]
    },
    {
        "title": "Psi4 1.1: An Open-Source Electronic Structure Program Emphasizing Automation, Advanced Libraries, and Interoperability",
        "authors": "R. M. Parrish, L. A. Burns, D. G. A. Smith, A. C. Simmonett, A. E. DePrince, E. G. Hohenstein, U. Bozkaya, A. Y. Sokolov, R. D. Remigio, R. M. Richard, J. F. Gonthier, A. M. James, H. R. McAlexander, A. Kumar, M. Saitow, X. Wang, B. P. Pritchard, P. Verma, H. F. Schaefer, K. Patkowski, R. A. King, E. F. Valeev, F. A. Evangelista, J. M. Turney, T. D. Crawford, C. D. Sherrill",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2017,
        "doi": "10.1021/acs.jctc.7b00174",
        "themes": [
            "software"
        ]
    },
    {
        "title": "Mapping the 3D orientation of piconewton integrin traction forces",
        "authors": "J. M. Brockman, A. T. Blanchard, V. P. Ma, W. D. Derricotte, Y. Zhang, M. E. Fay, W. A. Lam, F. A. Evangelista, A. L. Mattheyses, K. S. Salaita",
        "venue": "Nature Methods",
        "year": 2017,
        "doi": "10.1038/nmeth.4536",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "Localized Intrinsic Valence Virtual Orbitals as a Tool for the Automatic Classification of Core Excited States",
        "authors": "W. D. Derricotte, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2017,
        "doi": "10.1021/acs.jctc.7b00493",
        "themes": [
            "xray"
        ]
    },
    {
        "title": "Driven similarity renormalization group: Third-order multireference perturbation theory",
        "authors": "C. Li, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2017,
        "doi": "10.1063/1.4979016",
        "themes": [
            "dsrg"
        ]
    },
    {
        "title": "Adaptive Configuration Interaction for Computing Challenging Electronic Excited States with Tunable Accuracy",
        "authors": "J. B. Schriber, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2017,
        "doi": "10.1021/acs.jctc.7b00725",
        "themes": [
            "sci"
        ]
    },
    {
        "title": "A low-cost approach to electronic excitation energies based on the driven similarity renormalization group",
        "authors": "C. Li, P. Verma, K. P. Hannon, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2017,
        "doi": "10.1063/1.4997480",
        "themes": [
            "dsrg"
        ]
    },
    {
        "title": "Towards numerically robust multireference theories: The driven similarity renormalization group truncated to one- and two-body operators",
        "authors": "C. Li, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2016,
        "doi": "10.1063/1.4947218",
        "themes": [
            "dsrg"
        ]
    },
    {
        "title": "Communication: An adaptive configuration interaction approach for strongly correlated electrons with tunable accuracy",
        "authors": "J. B. Schriber, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2016,
        "doi": "10.1063/1.4948308",
        "themes": [
            "sci"
        ]
    },
    {
        "title": "An integral-factorized implementation of the driven similarity renormalization group second-order multireference perturbation theory",
        "authors": "K. P. Hannon, C. Li, F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2016,
        "doi": "10.1063/1.4951684",
        "themes": [
            "dsrg"
        ]
    },
    {
        "title": "A Deterministic Projector Configuration Interaction Approach for the Ground State of Quantum Many-Body Systems",
        "authors": "T. Zhang, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2016,
        "doi": "10.1021/acs.jctc.6b00639",
        "themes": [
            "sci"
        ]
    },
    {
        "title": "Simulation of X-ray absorption spectra with orthogonality constrained density functional theory",
        "authors": "W. D. Derricotte, F. A. Evangelista",
        "venue": "Physical Chemistry Chemical Physics",
        "year": 2015,
        "doi": "10.1039/c4cp05509h",
        "themes": [
            "xray"
        ]
    },
    {
        "title": "Predicting Near Edge X-ray Absorption Spectra with the Spin-Free Exact-Two-Component Hamiltonian and Orthogonality Constrained Density Functional Theory",
        "authors": "P. Verma, W. D. Derricotte, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2015,
        "doi": "10.1021/acs.jctc.5b00817",
        "themes": [
            "xray",
            "relativistic"
        ]
    },
    {
        "title": "Multireference Driven Similarity Renormalization Group: A Second-Order Perturbative Analysis",
        "authors": "C. Li, F. A. Evangelista",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2015,
        "doi": "10.1021/acs.jctc.5b00134",
        "themes": [
            "dsrg"
        ]
    },
    {
        "title": "Calculations of Mode-Specific Tunneling of Double-Hydrogen Transfer in Porphycene Agree with and Illuminate Experiment",
        "authors": "Z. Homayoon, J. M. Bowman, F. A. Evangelista",
        "venue": "The Journal of Physical Chemistry Letters",
        "year": 2014,
        "doi": "10.1021/jz501482v",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "Adaptive multiconfigurational wave functions",
        "authors": "F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2014,
        "doi": "10.1063/1.4869192",
        "themes": [
            "sci"
        ]
    },
    {
        "title": "A driven similarity renormalization group approach to quantum many-body problems",
        "authors": "F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2014,
        "doi": "10.1063/1.4890660",
        "themes": [
            "dsrg"
        ]
    },
    {
        "title": "Orthogonality Constrained Density Functional Theory for Electronic Excited States",
        "authors": "F. A. Evangelista, P. G. Shushkov, J. C. Tully",
        "venue": "The Journal of Physical Chemistry A",
        "year": 2013,
        "doi": "10.1021/jp401323d",
        "themes": [
            "xray"
        ]
    },
    {
        "title": "Is cyclobutadiene really highly destabilized by antiaromaticity?",
        "authors": "J. I. Wu, Y. Mo, F. A. Evangelista, P. v. R. Schleyer",
        "venue": "Chemical Communications",
        "year": 2012,
        "doi": "10.1039/c2cc33521b",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "A sequential transformation approach to the internally contracted multireference coupled cluster method",
        "authors": "F. A. Evangelista, M. Hanauer, A. Köhn, J. Gauß",
        "venue": "The Journal of Chemical Physics",
        "year": 2012,
        "doi": "10.1063/1.4718704",
        "themes": [
            "mrcc"
        ]
    },
    {
        "title": "Psi4: an open‐source ab initio electronic structure program",
        "authors": "J. M. Turney, A. C. Simmonett, R. M. Parrish, E. G. Hohenstein, F. A. Evangelista, J. T. Fermann, B. J. Mintz, L. A. Burns, J. J. Wilke, M. L. Abrams, N. J. Russ, M. L. Leininger, C. L. Janssen, E. T. Seidl, W. D. Allen, H. F. Schaefer, R. A. King, E. F. Valeev, C. D. Sherrill, T. D. Crawford",
        "venue": "Wiley Interdisciplinary Reviews Computational Molecular Science",
        "year": 2011,
        "doi": "10.1002/wcms.93",
        "themes": [
            "software"
        ]
    },
    {
        "title": "On the approximation of the similarity-transformed Hamiltonian in single-reference and multireference coupled cluster theory",
        "authors": "F. A. Evangelista, J. Gauß",
        "venue": "Chemical Physics",
        "year": 2011,
        "doi": "10.1016/j.chemphys.2011.08.006",
        "themes": [
            "mrcc"
        ]
    },
    {
        "title": "An orbital-invariant internally contracted multireference coupled cluster approach",
        "authors": "F. A. Evangelista, J. Gauß",
        "venue": "The Journal of Chemical Physics",
        "year": 2011,
        "doi": "10.1063/1.3559149",
        "themes": [
            "mrcc"
        ]
    },
    {
        "title": "Alternative single-reference coupled cluster approaches for multireference problems: The simpler, the better",
        "authors": "F. A. Evangelista",
        "venue": "The Journal of Chemical Physics",
        "year": 2011,
        "doi": "10.1063/1.3598471",
        "themes": [
            "mrcc"
        ]
    },
    {
        "title": "Why Are Perfluorocyclobutadiene and Some Other (CF)nq Rings Non-Planar?",
        "authors": "J. I. Wu, F. A. Evangelista, P. v. R. Schleyer",
        "venue": "Organic Letters",
        "year": 2010,
        "doi": "10.1021/ol902866n",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "Perturbative triples corrections in state-specific multireference coupled cluster theory",
        "authors": "F. A. Evangelista, E. Prochnow, J. Gauß, H. F. Schaefer",
        "venue": "The Journal of Chemical Physics",
        "year": 2010,
        "doi": "10.1063/1.3305335",
        "themes": [
            "mrcc"
        ]
    },
    {
        "title": "Low-Lying Triplet States of Diphosphene and Diphosphinylidene",
        "authors": "T. Lu, Q. Hao, A. C. Simmonett, F. A. Evangelista, Y. Yamaguchi, D. Fang, H. F. Schaefer",
        "venue": "The Journal of Physical Chemistry A",
        "year": 2010,
        "doi": "10.1021/jp105281w",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "Insights into the orbital invariance problem in state-specific multireference coupled cluster theory",
        "authors": "F. A. Evangelista, J. Gauß",
        "venue": "The Journal of Chemical Physics",
        "year": 2010,
        "doi": "10.1063/1.3456546",
        "themes": [
            "mrcc"
        ]
    },
    {
        "title": "Characterization of the BNNO Radical",
        "authors": "Q. Cheng, A. C. Simmonett, F. A. Evangelista, Y. Yamaguchi, H. F. Schaefer",
        "venue": "Journal of Chemical Theory and Computation",
        "year": 2010,
        "doi": "10.1021/ct1001285",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "Analytic gradients for Mukherjee’s multireference coupled-cluster method using two-configurational self-consistent-field orbitals",
        "authors": "T. Jagau, E. Prochnow, F. A. Evangelista, J. Gauß",
        "venue": "The Journal of Chemical Physics",
        "year": 2010,
        "doi": "10.1063/1.3370847",
        "themes": [
            "mrcc"
        ]
    },
    {
        "title": "Water Dimer Radical Cation: Structures, Vibrational Frequencies, and Energetics",
        "authors": "Q. Cheng, F. A. Evangelista, A. C. Simmonett, Y. Yamaguchi, H. F. Schaefer",
        "venue": "The Journal of Physical Chemistry A",
        "year": 2009,
        "doi": "10.1021/jp907715a",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "Diphosphene and Diphosphinylidene",
        "authors": "T. Lu, A. C. Simmonett, F. A. Evangelista, Y. Yamaguchi, H. F. Schaefer",
        "venue": "The Journal of Physical Chemistry A",
        "year": 2009,
        "doi": "10.1021/jp904028a",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "Analytic gradients for the state-specific multireference coupled cluster singles and doubles model",
        "authors": "E. Prochnow, F. A. Evangelista, H. F. Schaefer, W. D. Allen, J. Gauß",
        "venue": "The Journal of Chemical Physics",
        "year": 2009,
        "doi": "10.1063/1.3204017",
        "themes": [
            "mrcc"
        ]
    },
    {
        "title": "A companion perturbation theory for state-specific multireference coupled cluster methods",
        "authors": "F. A. Evangelista, A. C. Simmonett, H. F. Schaefer, D. Mukherjee, W. D. Allen",
        "venue": "Physical Chemistry Chemical Physics",
        "year": 2009,
        "doi": "10.1039/b822910d",
        "themes": [
            "mrcc"
        ]
    },
    {
        "title": "Triple excitations in state-specific multireference coupled cluster theory: Application of Mk-MRCCSDT and Mk-MRCCSDT-n methods to model systems",
        "authors": "F. A. Evangelista, A. C. Simmonett, W. D. Allen, H. F. Schaefer, J. Gauß",
        "venue": "The Journal of Chemical Physics",
        "year": 2008,
        "doi": "10.1063/1.2834927",
        "themes": [
            "mrcc"
        ]
    },
    {
        "title": "Short Intramolecular Hydrogen Bonds: Derivatives of Malonaldehyde with Symmetrical Substituents",
        "authors": "J. C. Hargis, F. A. Evangelista, J. B. Ingels, H. F. Schaefer",
        "venue": "Journal of the American Chemical Society",
        "year": 2008,
        "doi": "10.1021/ja8060672",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "In search of definitive signatures of the elusive NCCO radical",
        "authors": "A. C. Simmonett, F. A. Evangelista, W. D. Allen, H. F. Schaefer",
        "venue": "The Journal of Chemical Physics",
        "year": 2007,
        "doi": "10.1063/1.2747241",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "Coupling term derivation and general implementation of state-specific multireference coupled cluster theories",
        "authors": "F. A. Evangelista, W. D. Allen, H. F. Schaefer",
        "venue": "The Journal of Chemical Physics",
        "year": 2007,
        "doi": "10.1063/1.2743014",
        "themes": [
            "mrcc"
        ]
    },
    {
        "title": "Hydrogen Atom and Hydride Anion Addition to Adenine: Structures and Energetics",
        "authors": "F. A. Evangelista, H. F. Schaefer",
        "venue": "ChemPhysChem",
        "year": 2006,
        "doi": "10.1002/cphc.200600049",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "High-order excitations in state-universal and state-specific multireference coupled cluster theories: Model systems",
        "authors": "F. A. Evangelista, W. D. Allen, H. F. Schaefer",
        "venue": "The Journal of Chemical Physics",
        "year": 2006,
        "doi": "10.1063/1.2357923",
        "themes": [
            "mrcc"
        ]
    },
    {
        "title": "Structures and Energetics of Adenosine Radicals: (2‘-dAdo − H)•",
        "authors": "F. A. Evangelista, H. F. Schaefer",
        "venue": "The Journal of Physical Chemistry A",
        "year": 2004,
        "doi": "10.1021/jp040361r",
        "themes": [
            "applications"
        ]
    },
    {
        "title": "Radicals Derived from Adenine: Prediction of Large Electron Affinities with a Considerable Spread",
        "authors": "F. A. Evangelista, A. Paul, H. F. Schaefer",
        "venue": "The Journal of Physical Chemistry A",
        "year": 2004,
        "doi": "10.1021/jp031210b",
        "themes": [
            "applications"
        ]
    }
];
