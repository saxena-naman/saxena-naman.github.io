import namanProfile from "./src/assets/naman_profile.jpg";
import logo from "./src/assets/logo.png";
import eecs570_1 from "./src/assets/projects/eecs570f/eecs570_1.png";
import eecs570_2 from "./src/assets/projects/eecs570f/eecs570_2.png";
import eecs570Report from "./src/assets/projects/eecs570f/Transmuter_-Bridging-the-Efficiency-Gap-using-Memory-and-Dataflow-Reconfiguration.pdf";
import eecs470_1 from "./src/assets/projects/eecs470/eecs470_1.png";
import eecs470_2 from "./src/assets/projects/eecs470/eecs470_2.png";
import eecs470Report from "./src/assets/projects/eecs470/eecs470finalprojectreport.pdf";
import eecs59803_1 from "./src/assets/projects/eecs59803/eecs59803_1.png";
import eecs59803Report from "./src/assets/projects/eecs59803/eecs598-03-final-report.pdf";
import resumePdf from "./src/assets/pdfs/Naman_Saxena_Resume.pdf";

let info = {
  name: "Naman Saxena",
  logo_name: "Naman",
  flat_picture: namanProfile,
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
    email: "namansaxena77@gmail.com",
    resume: resumePdf
  },
  education: [
    {
      name: "University of Michigan",
      place: "Ann Arbor, USA",
      date: "Sep, 2021 - Dec, 2022",
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
  research_experience: [
    {
      name: "Delhi Technological University",
      place: "Delhi, India",
      date: "Aug, 2015 - May, 2017",
      position: "Research Assistant",
      description:
        "Researched CMOS technologies and advanced memory-cell designs under Prof. Neeta Pandey; co-authored 4 research papers during undergraduate studies.",
      skills: ["CMOS", "Memory Design", "Research"]
    },
    {
      name: "Maker's Asylum",
      place: "Delhi, India",
      date: "Dec, 2015 - Jan, 2016",
      position: "Research Project",
      description:
        "Prototyped an eye motion-controlled wheelchair using electrooculography to improve mobility aids and assistive technology.",
      skills: ["Electrooculography", "Assistive Tech", "Prototyping"]
    },
    {
      name: "Loughborough University, Wolfson School",
      place: "Loughborough, UK",
      date: "Jun, 2016 - Aug, 2016",
      position: "Visiting Research Scholar",
      description:
        "Devised a prototype for point-of-care detection of E. coli bacteria under Dr. Sourav Ghosh; led the electronics team implementing a novel opto-acoustic transduction method and contributed to GUI development. Awarded the Wolfson Summer Bursary.",
      skills: ["Biosensing", "Opto-acoustics", "Electronics"]
    },
    {
      name: "IIT-Bombay",
      place: "Mumbai, India",
      date: "Jun, 2015",
      position: "Research Intern",
      description:
        "Developed a microcontroller-based webserver for remote DC motor control via Ethernet to support virtual labs; realized a closed-loop buck converter using TI's TMS570 DSP and D-Space (DS1103).",
      skills: ["Embedded Systems", "Power Electronics", "Microcontrollers"]
    }
  ],
  skills: [
    {
      title: "hdl",
      info: ["System Verilog", "Verilog"],
      icon: "fas fa-microchip"
    },
    {
      title: "programming languages",
      info: ["Python", "C", "C++", "CUDA", "Perl", "Bash", "TCL", "Assembly"],
      icon: "fas fa-code"
    },
    {
      title: "methodologies",
      info: ["UVM", "OVM", "Formal Verification", "Functional Coverage"],
      icon: "fas fa-check-square"
    },
    {
      title: "eda tools",
      info: [
        "Questa Sim",
        "Synopsys VCS",
        "Cadence Xcelium",
        "Vivado",
        "Verdi",
        "Indago",
        "DVE"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "operating systems",
      info: ["Linux", "Unix", "Windows"],
      icon: "fas fa-laptop"
    },
    {
      title: "version control & collaboration",
      info: ["Git", "Perforce", "ClearCase", "JIRA", "Confluence", "GitLab", "Notion"],
      icon: "fas fa-code-branch"
    }
  ],
  portfolio: [
    {
      name: "LLVM Optimization",
      pictures: [
        {
          img: logo
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
          img: eecs570_1
        },
        {
          img: eecs570_2
        }
      ],
      technologies: ["CUDA", "C", "gem5", "GPU"],
      category: "Architecture",
      date: "2022",
      description:
        "Accelerated forward pass of a two-layer Graph Convolution Network on hardware accelerator (Transmuter) in gem5 & C and Tesla V100 GPU (in CUDA); 16x and 64x speedup on Reddit dataset over sequential version.",
      visit: eecs570Report
    },
    {
      name: "RISC-V Processor",
      pictures: [
        {
          img: eecs470_1
        },
        {
          img: eecs470_2
        }
      ],
      technologies: ["Verilog", "RISC-V", "Computer Architecture"],
      category: "Architecture",
      date: "2021",
      description:
        "Design and synthesis of Out-of-Order RISC-V Processor: RISC-V N-way arbitrary superscalar based on MIPS R10K with early branch resolution achieving one of the most optimized ns/instructions in class with CPI=1.54 and clock period of 9.7ns.",
      visit: eecs470Report
    },
    {
      name: "Machine Learning Kernels",
      pictures: [
        {
          img: eecs59803_1
        }
      ],
      technologies: ["Python", "ML", "Computer Vision"],
      category: "AI",
      date: "2022",
      description:
        "Programmed machine learning kernels for computer vision applications: KNN, GAN, RNN, Transformer, Object Detection.",
      visit: eecs59803Report
    },
    {
      name: "5-Stage In-Order Pipeline",
      pictures: [
        {
          img: logo
        }
      ],
      technologies: ["Verilog", "Computer Architecture", "Pipelining"],
      category: "Architecture",
      date: "2021",
      description:
        "Designed a 5-stage in-order processor pipeline in Verilog, implementing hazard mitigation, forwarding, and bypassing logic."
    },
    {
      name: "FSM-Based Digital Circuits",
      pictures: [
        {
          img: logo
        }
      ],
      technologies: ["Verilog", "FSM", "Digital Design"],
      category: "Digital Logic",
      date: "2021",
      description:
        "Designed and verified FSM-based digital circuits in Verilog: Arbiter, Priority Selector, Rotating Priority Selector, Integer Square Root Module, and Content Addressable Memory (CAM)."
    },
    {
      name: "Xeon Phi Beamforming Accelerator",
      pictures: [
        {
          img: logo
        }
      ],
      technologies: ["Xeon Phi", "Parallel Computing", "C"],
      category: "Systems",
      date: "2021",
      description:
        "Implemented a parallel Xeon Phi accelerator for beamforming pre-processed data, achieving a 120x speedup over the sequential version."
    },
    {
      name: "Solar Emulator on FPGA",
      pictures: [
        {
          img: logo
        }
      ],
      technologies: ["FPGA", "Altera DE0-Nano", "Power Electronics"],
      category: "Systems",
      date: "2017",
      description:
        "Built a buck-converter-based solar emulator on an Altera DE0-Nano FPGA, realizing sorting algorithms in hardware to optimize the control scheme and improve accuracy replicating a power-system plant."
    },
    {
      name: "SATA Specification",
      pictures: [
        {
          img: logo
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
          img: logo
        }
      ],
      technologies: ["MOS", "Logic Design", "Research"],
      category: "Publication",
      date: "2017",
      description:
        "Publication: N. Saxena, S. Dutta, N. Pandey and K. Gupta, 'Implementation and Performance Comparison of a Four-Bit Ripple carry Adder Using Different MOS Current Mode Logic Topologies' 2017 Computational Science and Its Applications ICCSA."
    },
    {
      name: "Asynchronous Pipeline (PFSCL)",
      pictures: [
        {
          img: logo
        }
      ],
      technologies: ["VLSI", "Asynchronous Logic", "CMOS"],
      category: "Publication",
      date: "2016",
      description:
        "Publication: N. Saxena, S. Dutta, and N. Pandey, 'An Efficient Hybrid PFSCL based Implementation of Asynchronous Pipeline,' I-Manager's Journal on Circuits and Systems, New Delhi, 2016."
    },
    {
      name: "Asynchronous Pipeline (Transmission Gate Logic)",
      pictures: [
        {
          img: logo
        }
      ],
      technologies: ["VLSI", "Asynchronous Logic", "Digital Design"],
      category: "Publication",
      date: "2016",
      description:
        "Publication: N. Saxena, S. Dutta, N. Pandey and K. Gupta, 'Implementation of Asynchronous Pipeline using Transmission Gate Logic,' 2016 International Conference on Computational Techniques in Information and Communication Technologies (ICCTICT), New Delhi. Also presented as a paper presentation at ICCTICT 2016."
    },
    {
      name: "Opto-Acoustic E. coli Detection",
      pictures: [
        {
          img: logo
        }
      ],
      technologies: ["Biosensing", "Opto-acoustics", "Electronics"],
      category: "Publication",
      date: "2016",
      description:
        "Poster presentation: S. Dutta, N. Saxena, W. Mitchell, D. Bristow, and S. K. Ghosh, 'Rapid multiplexed detection of E. coli using a novel opto-acoustic transduction method,' EPSRC Bridging the Gap in Antimicrobial Resistance Network Programme, 13 Sep 2016, Loughborough, UK."
    },
    {
      name: "EDA Tools Comparative Study",
      pictures: [
        {
          img: logo
        }
      ],
      technologies: ["EDA", "VLSI"],
      category: "Publication",
      date: "2016",
      description:
        "Poster presentation: N. Pandey, S. Dutta, and N. Saxena, 'A Comparative Study on Electronic Design Automation Tools,' Recent Advances in Mechanical Engineering (RAME-2016), Delhi Technological University, Delhi, India."
    }
  ],
  achievements: [
    {
      description:
        "Promoted from Senior Engineer to Staff Engineer for contributions to MMU and prefetcher verification.",
      issuer: "Qualcomm",
      type: "Recognition",
      year: "2024",
      location: "Santa Clara, CA"
    },
    {
      description:
        "Exceeded performance expectations through quick ramp-up with thorough and timely prefetcher verification.",
      issuer: "Qualcomm",
      type: "Recognition",
      year: "2023",
      location: "Santa Clara, CA"
    },
    {
      description:
        "Rewarded best project in Applied Parallel Programming with GPUs course at University of Michigan for implementing the most optimized forward pass of a 2-layer graph convolution network in a class of ~200 students",
      issuer: "University of Michigan",
      type: "Academic Award",
      year: "2021",
      location: "Ann Arbor"
    },
    {
      description:
        "Received certificate of excellence and spot bonus for scripting the configuration framework for DRAM VIPs",
      issuer: "Mentor Graphics",
      type: "Professional Award",
      year: "2019",
      location: "India"
    },
    {
      description:
        "Recognized with outstanding feedback in annual performance review for successful customer engagement on the SATA Verification IP.",
      issuer: "Mentor Graphics",
      type: "Recognition",
      year: "2018",
      location: "Noida, India"
    },
    {
      description:
        "Awarded the Wolfson Summer Bursary of £2,000 as a Visiting Research Scholar.",
      issuer: "Loughborough University",
      type: "Grant",
      year: "2016",
      location: "Loughborough, UK"
    },
    {
      description:
        "Won First Runner-up and People’s choice award at NASA’s Space Apps Challenge, Delhi, India (organized at IIT-Delhi) for the project glove above, where sensor functionalities were added to enhance an astronaut’s glove",
      issuer: "NASA Space Apps Challenge",
      type: "Award",
      year: "2015",
      location: "Delhi"
    },
    {
      description:
        "Runner-up, 'Mission Impossible' competition at Troika (IEEE-Delhi technical fest) — engineered a line-follower robot to solve a laser-maze challenge.",
      issuer: "Troika (IEEE Delhi Section)",
      type: "Award",
      year: "2015",
      location: "Delhi, India"
    },
    {
      description:
        "Winner, 'Brainwave' competition at Troika — designed an electronic hourglass without a microcontroller.",
      issuer: "Troika (IEEE Delhi Section)",
      type: "Award",
      year: "2014",
      location: "Delhi, India"
    }
  ],
  professional_service: [
    {
      description:
        "Peer reviewer for ~50 manuscripts across 11 IEEE/ACM conferences and journals, including ICoDSA, SOCC, ICCD, INDISCON, EEEIC, ICETET-SIP, SBCCI, ICCCNT, ISSCS, ISCI, and JETTA.",
      issuer: "IEEE / ACM conferences & journals",
      type: "Peer Review",
      year: "2025",
      location: "Remote"
    },
    {
      description:
        "Technical/Program Committee Member — ICCD 2025 (Hardware Architectures, Computing Systems, Logic & Circuit Design tracks), SOCC 2025, SBCCI 2025, ISCI 2025.",
      issuer: "IEEE",
      type: "Committee",
      year: "2025",
      location: "Remote"
    },
    {
      description:
        "Mentor, Startupbootcamp accelerator cohort — strategic guidance and industry expertise for early-stage startups.",
      issuer: "Startupbootcamp",
      type: "Mentorship",
      year: "2025",
      location: "Remote"
    },
    {
      description:
        "Judge, Technovation Girls — evaluated mobile-app submissions from teams worldwide, supporting 10,000+ young women in technology and entrepreneurship.",
      issuer: "Technovation Girls",
      type: "Judging",
      year: "2025",
      location: "Remote"
    },
    {
      description:
        "Grader, University of Michigan — EECS 423 (Micro/Nano Device Fabrication), EECS 470 (Computer Architecture), EECS 312 (Digital Integrated Circuits), EECS 320 (Semiconductor Devices).",
      issuer: "University of Michigan",
      type: "Teaching",
      year: "2022",
      location: "Ann Arbor, MI"
    }
  ]
};

export default info;
