// Display metadata for each field (name matches a key in registry field-map).
export type Demo = {
  name: string;
  title: string;
  domain: string;
  blurb: string;
};

export const DEMOS: Demo[] = [
  { name: "gravitationalwave", title: "Gravitational Wave", domain: "Astrophysics", blurb: "Binary inspiral chirp - two masses spiral in, radiating a quadrupole wave." },
  { name: "interference", title: "Double Slit", domain: "Quantum Mechanics", blurb: "Two coherent sources; intensity = |Σ cos(kr − ωt)|²." },
  { name: "superposition", title: "Superposition", domain: "Quantum Mechanics", blurb: "|ψ⟩ = Σ cₙ|φₙ⟩ - box eigenstates beat; |ψ|² sloshes." },
  { name: "entanglement", title: "Entanglement", domain: "Quantum Information", blurb: "Bell pair - anti-correlated lobes, bridge, collapse pulses." },
  { name: "blochsphere", title: "Bloch Sphere", domain: "Qubit · spin", blurb: "State vector precessing + nutating on the Bloch sphere." },
  { name: "transmon", title: "Transmon", domain: "Qubit · superconducting", blurb: "Josephson −cos φ well with a pulsing anharmonic ladder." },
  { name: "trappedion", title: "Trapped Ion", domain: "Qubit · trapped-ion", blurb: "Ion chain in a harmonic trap, normal-mode motion." },
  { name: "topological", title: "Topological", domain: "Qubit · anyon", blurb: "Anyon world-lines braiding through space and time." },
  { name: "orbital", title: "d-Orbital", domain: "Quantum Mechanics", blurb: "Hydrogen probability density |ψ|², precessing + breathing." },
  { name: "chladni", title: "Chladni Plate", domain: "Acoustics / Mechanics", blurb: "Sand gathers on the nodal lines of a vibrating plate; modes morph." },
  { name: "ising", title: "Ising Model", domain: "Statistical Mechanics", blurb: "Spin-lattice domains near criticality, walls glowing as they flip." },
  { name: "flowfield", title: "Turbulence", domain: "Fluid Dynamics", blurb: "Domain-warped flow - advected vorticity / smoke." },
  { name: "blackhole", title: "Black Hole", domain: "Astrophysics", blurb: "Event-horizon void, photon ring, Doppler-beamed accretion disk." },
  { name: "galaxy", title: "Galaxy", domain: "Astrophysics", blurb: "5-arm logarithmic spiral with differential rotation." },
  { name: "ripples", title: "Ripples", domain: "Wave Mechanics", blurb: "Concentric harmonic waves from staggered drop points." },
  { name: "waves", title: "Flow", domain: "Wave Mechanics", blurb: "Drifting horizontal wave train." },
  { name: "lensing", title: "Gravitational Lensing", domain: "Relativity", blurb: "A mass bends a background starfield into arcs + an Einstein ring." },
  { name: "pulsar", title: "Pulsar", domain: "Astrophysics", blurb: "Tilted magnetic beams sweep like a lighthouse." },
  { name: "nbody", title: "N-Body", domain: "Astrophysics", blurb: "Gravitating bodies on nested orbits with fading trails." },
  { name: "tunneling", title: "Tunneling", domain: "Quantum Mechanics", blurb: "Wave packet partly reflects, partly tunnels through a barrier." },
  { name: "qho", title: "Harmonic Oscillator", domain: "Quantum Mechanics", blurb: "QHO eigenstates |ψₙ|² climbing the ladder (Hermite × Gaussian)." },
  { name: "quantumwalk", title: "Quantum Walk", domain: "Quantum Information", blurb: "Ballistic two-horned spread vs a diffusive classical walk." },
  { name: "wigner", title: "Wigner Function", domain: "Quantum Optics", blurb: "Cat-state phase space: two lobes + non-classical interference." },
  { name: "aharonovbohm", title: "Aharonov–Bohm", domain: "Quantum Mechanics", blurb: "Confined flux winds the interference fringes with angle." },
  { name: "rabi", title: "Rabi Oscillations", domain: "Quantum Optics", blurb: "Driven two-level atom: population sloshes |g⟩ ↔ |e⟩." },
  { name: "decoherence", title: "Decoherence", domain: "Quantum Information", blurb: "Density matrix off-diagonals decay: pure → mixed." },
  { name: "correlationgrid", title: "Correlation Grid", domain: "Quantum Information", blurb: "Lattice of entangled pairs flickering in lockstep." },
  { name: "grover", title: "Grover Search", domain: "Quantum Computing", blurb: "Amplitude amplification grows the marked state's bar." },
  { name: "vortexlattice", title: "Vortex Lattice", domain: "Condensed Matter", blurb: "Abrikosov triangular array of quantized vortices." },
  { name: "hofstadter", title: "Hofstadter Butterfly", domain: "Condensed Matter", blurb: "Self-similar energy spectrum vs magnetic flux." },
  { name: "bandstructure", title: "Band Structure", domain: "Condensed Matter", blurb: "E(k) bands with a gap at the zone boundary." },
  { name: "fermisurface", title: "Fermi Surface", domain: "Condensed Matter", blurb: "cos kx + cos ky = μ contour, filling sweeping." },
  { name: "quasicrystal", title: "Quasicrystal", domain: "Condensed Matter", blurb: "5-fold plane-wave sum - quasiperiodic, never repeats." },
  { name: "turing", title: "Turing Patterns", domain: "Reaction-Diffusion", blurb: "Activator-inhibitor labyrinth, slowly morphing." },
  { name: "soliton", title: "Solitons", domain: "Nonlinear Waves", blurb: "KdV sech² pulses collide and pass through intact." },
  { name: "doublependulum", title: "Double Pendulum", domain: "Chaos", blurb: "Chaotic trace of the lower bob, sensitive to initial conditions." },
  { name: "lorenz", title: "Lorenz Attractor", domain: "Chaos", blurb: "The butterfly - orbit switching between two wings." },
  { name: "bz", title: "Belousov–Zhabotinsky", domain: "Nonlinear Chemistry", blurb: "Spiral waves in an excitable medium." },
  { name: "percolation", title: "Percolation", domain: "Statistical Mechanics", blurb: "Sites occupy past p_c - a spanning cluster appears." },
  { name: "phasespace", title: "Phase Space", domain: "Mechanics", blurb: "Pendulum energy contours; separatrix between libration & rotation." },
  { name: "lissajous", title: "Lissajous", domain: "Mechanics", blurb: "Orthogonal oscillations; ratio sets the knot, phase drifts." },
  { name: "dipole", title: "Dipole Field", domain: "Electromagnetism", blurb: "Field lines of two opposite charges." },
  { name: "feynman", title: "Feynman Diagram", domain: "Field Theory", blurb: "e⁻e⁺ → γ* → e⁻e⁺ with a wavy photon propagator." },
  { name: "latticegauge", title: "Lattice Gauge", domain: "Field Theory", blurb: "Grid links + flickering plaquette field strengths." },
];
