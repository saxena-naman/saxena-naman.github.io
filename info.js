let info = {
  name: "Naman Saxena",
  logo_name: "Naman",
  flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "With a strong foundation in the semiconductor domain, I bring a holistic background spanning IP-level, subsystem/SoC-level, and CPU core-level verification roles. This diverse experience has equipped me with technical expertise in Verilog, SystemVerilog HDLs, and scalable verification frameworks like UVM, enabling me to address complex challenges in semiconductor design verification.<br><br>Currently, I work as a Staff Design Verification Engineer at Qualcomm, where I focus on verifying advanced ARM architecture-based CPU cores for Snapdragon processors. My work ensures the reliability, efficiency, and performance of critical components such as Memory Management Units (MMUs), Translation Lookaside Buffers (TLBs), and Prefetchers. These processors are driving innovation across industries like AI, IoT, automotive, and edge computing, enabling transformative technologies such as secure on-device AI inference.",
  links: {
    linkedin: "https://www.linkedin.com/in/namasaxe",
    github: "https://github.com/saxena-naman",
    email: "namansaxena77@gmail.com"
  },
  education: [
    {
      name: "University of Michigan",
      place: "Ann Arbor, USA",
      date: "Sep, 2021 - Dec, 2023",
      degree: "Master of Science - MS, Electrical and Computer Engineering",
      gpa: "4.0/4.0",
      description:
        "Coursework: Parallel Computer Architecture, Deep Learning for Computer Vision, Advanced Compilers, VLSI Design, Algorithms. Rewarded best project in Applied Parallel Programming with GPUs course for implementing optimized GCN.",
      skills: [
        "Computer Architecture",
        "VLSI",
        "Deep Learning",
        "Compilers"
      ]
    },
    {
      name: "Delhi Technological University",
      place: "Delhi, India",
      date: "2013 - 2017",
      degree: "Bachelor’s Degree, Electrical and Electronics Engineering",
      gpa: "9.1/10.0",
      description:
        "Branch Topper Meritorious student award in 3rd and 4th year.",
      skills: [
        "Digital Signal Processing",
        "Microprocessors",
        "Digital Circuits"
      ]
    }
  ],
  experience: [
    {
      name: "Qualcomm",
      place: "Santa Clara, CA",
      date: "Nov, 2024 - Present",
      position: "Staff Engineer",
      description:
        "Developing industry-leading Snapdragon CPUs. Leading verification of proprietary micro-architectural features that enhance Memory Management Unit’s (MMU) performance. Working on integration and verification of the complex Realm Management extension feature of ARM architecture.",
      skills: ["CPU Verification", "ARM Architecture", "MMU", "UVM"]
    },
    {
      name: "Qualcomm",
      place: "Santa Clara, CA",
      date: "Feb, 2023 - Nov, 2024",
      position: "Senior CPU Engineer",
      description:
        "Led verification for all data, instruction, and translation prefetchers across multiple projects. Spearheaded accelerated verification of the TLB Hardware trace feature in collaboration with cross-functional teams.",
      skills: ["Prefetchers", "TLB", "Debugging"]
    },
    {
      name: "Apple",
      place: "Orlando, FL",
      date: "May, 2022 - Aug, 2022",
      position: "GPU Design Verification Intern",
      description:
        "Worked on System Verilog and UVM based MMU’s bus functional model (BFM) verification. Created functional DV level performance model for MMU and ironed out the regression flow.",
      skills: ["System Verilog", "UVM", "GPU Design"]
    },
    {
      name: "Qualcomm",
      place: "Bengaluru, India",
      date: "Sep, 2020 - Sep, 2021",
      position: "Senior Engineer",
      description:
        "Owned verification of two new features (Dynamic memory & core frequency control) from scratch. Yielded ~15% regression run time boost by eliminating redundancies.",
      skills: ["SoC Verification", "Low Power", "Scripting"]
    },
    {
      name: "Mentor Graphics",
      place: "Noida, India",
      date: "Jan, 2019 - Sep, 2020",
      position: "Senior Member Of Technical Staff",
      description:
        "Developed standalone VIP for DDR5 Memory & DIMM sideband interface. Reconstructed the callback architecture, configuration, & backdoor APIs for all DRAM VIPs.",
      skills: ["DDR5", "VIP Development", "Python"]
    },
    {
      name: "Mentor Graphics",
      place: "Noida, India",
      date: "June, 2017 - Dec, 2018",
      position: "Member Of Technical Staff",
      description:
        "Coded the complete Serial ATA v3.3 (SATA) compliance test suite with ~100 directed test scenarios using System Verilog. Implemented PIPE interface BFM.",
      skills: ["SATA", "System Verilog", "Protocol Verification"]
    }
  ],
  skills: [
    {
      title: "languages",
      info: [
        "System Verilog",
        "Verilog",
        "Python",
        "C",
        "C++",
        "CUDA",
        "Perl",
        "Bash",
        "TCL"
      ],
      icon: "fa fa-code"
    },
    {
      title: "methodologies",
      info: ["UVM", "OVM", "Formal Verification", "Functional Coverage"],
      icon: "fa fa-check-square"
    },
    {
      title: "eda tools",
      info: [
        "Questa Sim",
        "Synopsys VCS",
        "Cadence Xcelium",
        "Vivado",
        "Verdi",
        "Indago"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "operating systems",
      info: ["Linux", "Unix", "Windows"],
      icon: "fa fa-laptop"
    }
  ],
  portfolio: [
    {
      name: "LLVM Optimization",
      pictures: [
        {
          img: require("./src/assets/logo.png")
        }
      ],
      technologies: ["C++", "LLVM", "GCC", "Compiler"],
      category: "Systems",
      date: "2022",
      description:
        "Coded LLVM optimization pass for GCC compiler: Automatic vectorization with SLP, LSLP, and super-node SLP."
    },
    {
      name: "GCN Accelerator",
      pictures: [
        {
          img: require("./src/assets/logo.png")
        }
      ],
      technologies: ["CUDA", "C", "gem5", "GPU"],
      category: "Architecture",
      date: "2022",
      description:
        "Accelerated forward pass of a two-layer Graph Convolution Network on hardware accelerator (Transmuter) in gem5 & C and Tesla V100 GPU (in CUDA); 16x and 64x speedup on Reddit dataset over sequential version."
    },
    {
      name: "RISC-V Processor",
      pictures: [
        {
          img: require("./src/assets/logo.png")
        }
      ],
      technologies: ["Verilog", "RISC-V", "Computer Architecture"],
      category: "Architecture",
      date: "2021",
      description:
        "Design and synthesis of Out-of-Order RISC-V Processor: RISC-V N-way arbitrary superscalar based on MIPS R10K with early branch resolution achieving one of the most optimized ns/instructions in class with CPI=1.54 and clock period of 9.7ns."
    },
    {
      name: "Machine Learning Kernels",
      pictures: [
        {
          img: require("./src/assets/logo.png")
        }
      ],
      technologies: ["Python", "ML", "Computer Vision"],
      category: "AI",
      date: "2022",
      description:
        "Programmed machine learning kernels for computer vision applications: KNN, GAN, RNN, Transformer, Object Detection."
    },
    {
      name: "SATA Specification",
      pictures: [
        {
          img: require("./src/assets/logo.png")
        }
      ],
      technologies: ["System Verilog", "SATA", "Verification"],
      category: "Publication",
      date: "2018",
      description:
        "Publication: N. Saxena, N. Goel, and R. Rastogi, 'SATA Specification 3.3 Gaps Filled by SATA QVIP' Verification Horizon Volume 14 Issue 1, Mentor – A Siemens Business, 2018."
    },
    {
      name: "Ripple Carry Adder",
      pictures: [
        {
          img: require("./src/assets/logo.png")
        }
      ],
      technologies: ["MOS", "Logic Design", "Research"],
      category: "Publication",
      date: "2017",
      description:
        "Publication: N. Saxena, S. Dutta, N. Pandey and K. Gupta, 'Implementation and Performance Comparison of a Four-Bit Ripple carry Adder Using Different MOS Current Mode Logic Topologies' 2017 Computational Science and Its Applications ICCSA."
    }
  ],
  portfolio_design: [],
  recommendations: [
    {
      title:
        "Won First Runner-up and People’s choice award at NASA’s Space Apps Challenge, Delhi, India (organized at IIT-Delhi) for the project glove above, where sensor functionalities were added to enhance an astronaut’s glove",
      author: "NASA Space Apps Challenge",
      position: "Award",
      company: "2015",
      location: "Delhi"
    },
    {
      title:
        "Rewarded best project in Applied Parallel Programming with GPUs course at University of Michigan for implementing the most optimized forward pass of a 2-layer graph convolution network in a class of ~200 students",
      author: "University of Michigan",
      position: "Academic Award",
      company: "2021",
      location: "Ann Arbor"
    },
    {
      title:
        "Received certificate of excellence and spot bonus for scripting the configuration framework for DRAM VIPs",
      author: "Mentor Graphics",
      position: "Professional Award",
      company: "2019",
      location: "India"
    }
  ]
};

export default info;
