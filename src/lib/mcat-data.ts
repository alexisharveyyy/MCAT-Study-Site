export interface SubTopic {
  id: string;
  title: string;
  details?: string[];
}

export interface Topic {
  id: string;
  title: string;
  course?: string;
  subtopics: SubTopic[];
}

export interface ContentCategory {
  id: string;
  code: string;
  title: string;
  description: string;
  topics: Topic[];
}

export interface FoundationalConcept {
  id: string;
  number: number;
  title: string;
  description: string;
  categories: ContentCategory[];
}

export interface ExamSection {
  id: string;
  title: string;
  shortTitle: string;
  color: string;
  description: string;
  questionCount: number;
  timeMinutes: number;
  foundationalConcepts: FoundationalConcept[];
  disciplines?: { name: string; percentage: number }[];
}

export const mcatSections: ExamSection[] = [
  {
    id: "bio-biochem",
    title: "Biological and Biochemical Foundations of Living Systems",
    shortTitle: "Bio/Biochem",
    color: "#2563eb",
    description:
      "Solve problems by combining your knowledge of biological and biochemical concepts with your scientific inquiry and reasoning skills. This section tests processes unique to living organisms, such as growing, reproducing, maintaining a constant internal environment, acquiring materials and energy, sensing and responding to environmental changes, and adapting.",
    questionCount: 59,
    timeMinutes: 95,
    disciplines: [
      { name: "First-semester biochemistry", percentage: 25 },
      { name: "Introductory biology", percentage: 65 },
      { name: "General chemistry", percentage: 5 },
      { name: "Organic chemistry", percentage: 5 },
    ],
    foundationalConcepts: [
      {
        id: "fc1",
        number: 1,
        title:
          "Biomolecules have unique properties that determine how they contribute to the structure and function of cells and how they participate in the processes necessary to maintain life.",
        description:
          "The unique chemical and structural properties of biomolecules determine the roles they play in cells. The proper functioning of a living system depends on the many components acting harmoniously in response to a constantly changing environment.",
        categories: [
          {
            id: "1a",
            code: "1A",
            title:
              "Structure and function of proteins and their constituent amino acids",
            description:
              "Focuses on the structural and functional complexity of proteins, which is derived from their component amino acids, the sequence in which the amino acids are covalently bonded, and the three-dimensional structures the proteins adopt in an aqueous environment.",
            topics: [
              {
                id: "1a-amino-acids",
                title: "Amino Acids",
                course: "BC, OC",
                subtopics: [
                  {
                    id: "1a-aa-desc",
                    title: "Description",
                    details: [
                      "Absolute configuration at the alpha position",
                      "Amino acids as dipolar ions",
                      "Classifications: Acidic or basic, Hydrophobic or hydrophilic",
                    ],
                  },
                  {
                    id: "1a-aa-reactions",
                    title: "Reactions",
                    details: [
                      "Sulfur linkage for cysteine and cystine",
                      "Peptide linkage: polypeptides and proteins",
                      "Hydrolysis",
                    ],
                  },
                ],
              },
              {
                id: "1a-protein-structure",
                title: "Protein Structure",
                course: "BIO, BC, OC",
                subtopics: [
                  {
                    id: "1a-ps-structure",
                    title: "Structure",
                    details: [
                      "Primary (1) structure of proteins",
                      "Secondary (2) structure of proteins",
                      "Tertiary (3) structure of proteins; role of proline, cystine, hydrophobic bonding",
                      "Quaternary (4) structure of proteins",
                    ],
                  },
                  {
                    id: "1a-ps-stability",
                    title: "Conformational stability",
                    details: [
                      "Denaturing and folding",
                      "Hydrophobic interactions",
                      "Solvation layer (entropy)",
                    ],
                  },
                  {
                    id: "1a-ps-separation",
                    title: "Separation techniques",
                    details: ["Isoelectric point", "Electrophoresis"],
                  },
                ],
              },
              {
                id: "1a-nonenzymatic",
                title: "Nonenzymatic Protein Function",
                course: "BIO, BC",
                subtopics: [
                  { id: "1a-ne-binding", title: "Binding" },
                  { id: "1a-ne-immune", title: "Immune system" },
                  { id: "1a-ne-motors", title: "Motors" },
                ],
              },
              {
                id: "1a-enzyme-structure",
                title: "Enzyme Structure and Function",
                course: "BIO, BC",
                subtopics: [
                  {
                    id: "1a-es-function",
                    title: "Function of enzymes in catalyzing biological reactions",
                  },
                  {
                    id: "1a-es-classification",
                    title: "Enzyme classification by reaction type",
                  },
                  {
                    id: "1a-es-activation",
                    title: "Reduction of activation energy",
                  },
                  {
                    id: "1a-es-specificity",
                    title: "Substrates and enzyme specificity",
                  },
                  { id: "1a-es-active", title: "Active Site Model" },
                  { id: "1a-es-induced", title: "Induced-Fit Model" },
                  {
                    id: "1a-es-mechanism",
                    title: "Mechanism of catalysis",
                    details: ["Cofactors", "Coenzymes", "Water-soluble vitamins"],
                  },
                  {
                    id: "1a-es-local",
                    title: "Effects of local conditions on enzyme activity",
                  },
                ],
              },
              {
                id: "1a-enzyme-control",
                title: "Control of Enzyme Activity",
                course: "BIO, BC",
                subtopics: [
                  {
                    id: "1a-ec-kinetics",
                    title: "Kinetics",
                    details: [
                      "General (catalysis)",
                      "Michaelis-Menten",
                      "Cooperativity",
                    ],
                  },
                  { id: "1a-ec-feedback", title: "Feedback regulation" },
                  {
                    id: "1a-ec-inhibition",
                    title: "Inhibition types",
                    details: [
                      "Competitive",
                      "Noncompetitive",
                      "Mixed",
                      "Uncompetitive",
                    ],
                  },
                  {
                    id: "1a-ec-regulatory",
                    title: "Regulatory enzymes",
                    details: [
                      "Allosteric enzymes",
                      "Covalently modified enzymes",
                      "Zymogen",
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "1b",
            code: "1B",
            title:
              "Transmission of genetic information from the gene to the protein",
            description:
              "Focuses on the molecular mechanisms responsible for the transfer of sequence-specific biological information between biopolymers that ultimately result in the synthesis of proteins.",
            topics: [
              {
                id: "1b-nucleic-acid",
                title: "Nucleic Acid Structure and Function",
                course: "BIO, BC",
                subtopics: [
                  { id: "1b-na-desc", title: "Description" },
                  {
                    id: "1b-na-nucleotides",
                    title: "Nucleotides and nucleosides",
                    details: [
                      "Sugar phosphate backbone",
                      "Pyrimidine, purine residues",
                    ],
                  },
                  {
                    id: "1b-na-dna",
                    title:
                      "Deoxyribonucleic acid (DNA): double helix, Watson-Crick model",
                  },
                  {
                    id: "1b-na-basepairing",
                    title: "Base pairing specificity: A with T, G with C",
                  },
                  {
                    id: "1b-na-function",
                    title: "Function in transmission of genetic information",
                  },
                  {
                    id: "1b-na-denaturation",
                    title: "DNA denaturation, reannealing, hybridization",
                  },
                ],
              },
              {
                id: "1b-dna-replication",
                title: "DNA Replication",
                course: "BIO",
                subtopics: [
                  {
                    id: "1b-dr-mechanism",
                    title: "Mechanism of replication",
                  },
                  {
                    id: "1b-dr-semi",
                    title: "Semiconservative nature of replication",
                  },
                  {
                    id: "1b-dr-enzymes",
                    title: "Specific enzymes involved in replication",
                  },
                  {
                    id: "1b-dr-origins",
                    title: "Origins of replication, multiple origins in eukaryotes",
                  },
                  {
                    id: "1b-dr-ends",
                    title: "Replicating the ends of DNA molecules",
                  },
                ],
              },
              {
                id: "1b-dna-repair",
                title: "Repair of DNA",
                course: "BIO",
                subtopics: [
                  {
                    id: "1b-rp-during",
                    title: "Repair during replication",
                  },
                  { id: "1b-rp-mutations", title: "Repair of mutations" },
                ],
              },
              {
                id: "1b-genetic-code",
                title: "Genetic Code",
                course: "BIO",
                subtopics: [
                  {
                    id: "1b-gc-central",
                    title: "Central Dogma: DNA -> RNA -> protein",
                  },
                  { id: "1b-gc-triplet", title: "The triplet code" },
                  {
                    id: "1b-gc-codon",
                    title: "Codon-anticodon relationship",
                  },
                  {
                    id: "1b-gc-degenerate",
                    title: "Degenerate code, wobble pairing",
                  },
                  {
                    id: "1b-gc-missense",
                    title: "Missense, nonsense codons",
                  },
                  {
                    id: "1b-gc-initiation",
                    title: "Initiation, termination codons",
                  },
                  { id: "1b-gc-mrna", title: "Messenger RNA (mRNA)" },
                ],
              },
              {
                id: "1b-transcription",
                title: "Transcription",
                course: "BIO",
                subtopics: [
                  {
                    id: "1b-tx-trna",
                    title: "Transfer RNA (tRNA); ribosomal RNA (rRNA)",
                  },
                  {
                    id: "1b-tx-mechanism",
                    title: "Mechanism of transcription",
                  },
                  {
                    id: "1b-tx-processing",
                    title: "mRNA processing in eukaryotes, introns, exons",
                  },
                  {
                    id: "1b-tx-ribozymes",
                    title: "Ribozymes, spliceosomes, snRNPs, snRNAs",
                  },
                  {
                    id: "1b-tx-introns",
                    title: "Functional and evolutionary importance of introns",
                  },
                ],
              },
              {
                id: "1b-translation",
                title: "Translation",
                course: "BIO",
                subtopics: [
                  {
                    id: "1b-tl-roles",
                    title: "Roles of mRNA, tRNA, rRNA",
                  },
                  {
                    id: "1b-tl-ribosomes",
                    title: "Role and structure of ribosomes",
                  },
                  {
                    id: "1b-tl-cofactors",
                    title: "Initiation, termination co-factors",
                  },
                  {
                    id: "1b-tl-posttrans",
                    title: "Post-translational modification of proteins",
                  },
                ],
              },
              {
                id: "1b-chromosome",
                title: "Eukaryotic Chromosome Organization",
                course: "BIO",
                subtopics: [
                  {
                    id: "1b-ch-proteins",
                    title: "Chromosomal proteins",
                  },
                  {
                    id: "1b-ch-repetitive",
                    title: "Single copy vs. repetitive DNA",
                  },
                  { id: "1b-ch-supercoiling", title: "Supercoiling" },
                  {
                    id: "1b-ch-chromatin",
                    title: "Heterochromatin vs. euchromatin",
                  },
                  {
                    id: "1b-ch-telomeres",
                    title: "Telomeres, centromeres",
                  },
                ],
              },
              {
                id: "1b-gene-expr-prok",
                title: "Control of Gene Expression in Prokaryotes",
                course: "BIO",
                subtopics: [
                  {
                    id: "1b-gep-operon",
                    title: "Operon Concept, Jacob-Monod Model",
                  },
                  {
                    id: "1b-gep-repression",
                    title: "Gene repression in bacteria",
                  },
                  {
                    id: "1b-gep-positive",
                    title: "Positive control in bacteria",
                  },
                ],
              },
              {
                id: "1b-gene-expr-euk",
                title: "Control of Gene Expression in Eukaryotes",
                course: "BIO",
                subtopics: [
                  {
                    id: "1b-gee-transcriptional",
                    title: "Transcriptional regulation",
                  },
                  {
                    id: "1b-gee-binding",
                    title: "DNA binding proteins, transcription factors",
                  },
                  {
                    id: "1b-gee-amplification",
                    title: "Gene amplification and duplication",
                  },
                  {
                    id: "1b-gee-posttranscriptional",
                    title: "Post-transcriptional control, basic concept of splicing",
                  },
                  {
                    id: "1b-gee-cancer",
                    title:
                      "Cancer as a failure of normal cellular controls, oncogenes, tumor suppressor genes",
                  },
                  {
                    id: "1b-gee-chromatin",
                    title: "Regulation of chromatin structure",
                  },
                  {
                    id: "1b-gee-methylation",
                    title: "DNA methylation",
                  },
                  {
                    id: "1b-gee-noncoding",
                    title: "Role of noncoding RNAs",
                  },
                ],
              },
              {
                id: "1b-recombinant",
                title: "Recombinant DNA and Biotechnology",
                course: "BIO",
                subtopics: [
                  { id: "1b-rd-cloning", title: "Gene cloning" },
                  {
                    id: "1b-rd-restriction",
                    title: "Restriction enzymes",
                  },
                  { id: "1b-rd-libraries", title: "DNA libraries" },
                  { id: "1b-rd-cdna", title: "Generation of cDNA" },
                  { id: "1b-rd-hybrid", title: "Hybridization" },
                  {
                    id: "1b-rd-expressing",
                    title: "Expressing cloned genes",
                  },
                  { id: "1b-rd-pcr", title: "Polymerase chain reaction" },
                  {
                    id: "1b-rd-gel",
                    title: "Gel electrophoresis and Southern blotting",
                  },
                  { id: "1b-rd-sequencing", title: "DNA sequencing" },
                  {
                    id: "1b-rd-analyzing",
                    title: "Analyzing gene expression",
                  },
                  {
                    id: "1b-rd-function",
                    title: "Determining gene function",
                  },
                  { id: "1b-rd-stem", title: "Stem cells" },
                  {
                    id: "1b-rd-practical",
                    title:
                      "Practical applications of DNA technology",
                    details: [
                      "Medical applications",
                      "Human gene therapy",
                      "Pharmaceuticals",
                      "Forensic evidence",
                      "Environmental cleanup",
                      "Agriculture",
                    ],
                  },
                  {
                    id: "1b-rd-safety",
                    title: "Safety and ethics of DNA technology",
                  },
                ],
              },
            ],
          },
          {
            id: "1c",
            code: "1C",
            title:
              "Transmission of heritable information from generation to generation and the processes that increase genetic diversity",
            description:
              "Focuses on the mechanisms that function to transmit the heritable information stored in DNA from generation to generation.",
            topics: [
              {
                id: "1c-evidence",
                title: "Evidence That DNA Is Genetic Material",
                course: "BIO",
                subtopics: [],
              },
              {
                id: "1c-mendelian",
                title: "Mendelian Concepts",
                course: "BIO",
                subtopics: [
                  { id: "1c-mc-phenotype", title: "Phenotype and genotype" },
                  { id: "1c-mc-gene", title: "Gene" },
                  { id: "1c-mc-locus", title: "Locus" },
                  { id: "1c-mc-allele", title: "Allele: single and multiple" },
                  {
                    id: "1c-mc-homo",
                    title: "Homozygosity and heterozygosity",
                  },
                  { id: "1c-mc-wild", title: "Wild-type" },
                  { id: "1c-mc-recessive", title: "Recessiveness" },
                  { id: "1c-mc-complete", title: "Complete dominance" },
                  { id: "1c-mc-codominance", title: "Co-dominance" },
                  {
                    id: "1c-mc-incomplete",
                    title:
                      "Incomplete dominance, leakage, penetrance, expressivity",
                  },
                  {
                    id: "1c-mc-hybrid",
                    title: "Hybridization: viability",
                  },
                  { id: "1c-mc-genepool", title: "Gene pool" },
                ],
              },
              {
                id: "1c-meiosis",
                title: "Meiosis and Other Factors Affecting Genetic Variability",
                course: "BIO",
                subtopics: [
                  {
                    id: "1c-me-significance",
                    title: "Significance of meiosis",
                  },
                  {
                    id: "1c-me-differences",
                    title: "Important differences between meiosis and mitosis",
                  },
                  {
                    id: "1c-me-segregation",
                    title: "Segregation of genes",
                    details: [
                      "Independent assortment",
                      "Linkage",
                      "Recombination",
                      "Single crossovers",
                      "Double crossovers",
                      "Synaptonemal complex",
                      "Tetrad",
                      "Sex-linked characteristics",
                      "Sex determination",
                      "Cytoplasmic/extranuclear inheritance",
                    ],
                  },
                  {
                    id: "1c-me-mutation",
                    title: "Mutation",
                    details: [
                      "General concept of mutation",
                      "Types of mutations: random, translation error, transcription error, base substitution, inversion, addition, deletion, translocation, mispairing",
                      "Advantageous vs. deleterious mutation",
                      "Inborn errors of metabolism",
                      "Relationship of mutagens to carcinogens",
                    ],
                  },
                  { id: "1c-me-drift", title: "Genetic drift" },
                  {
                    id: "1c-me-synapsis",
                    title:
                      "Synapsis or crossing-over mechanism for increasing genetic diversity",
                  },
                ],
              },
              {
                id: "1c-analytic",
                title: "Analytic Methods",
                course: "BIO",
                subtopics: [
                  {
                    id: "1c-am-hardy",
                    title: "Hardy-Weinberg Principle",
                  },
                  {
                    id: "1c-am-testcross",
                    title: "Testcross (Backcross; concepts of parental, F1, and F2 generations)",
                  },
                  {
                    id: "1c-am-mapping",
                    title: "Gene mapping: crossover frequencies",
                  },
                  {
                    id: "1c-am-biometry",
                    title: "Biometry: statistical methods",
                  },
                ],
              },
              {
                id: "1c-evolution",
                title: "Evolution",
                course: "BIO",
                subtopics: [
                  {
                    id: "1c-ev-natural",
                    title: "Natural selection",
                    details: [
                      "Fitness concept",
                      "Selection by differential reproduction",
                      "Concepts of natural and group selection",
                      "Evolutionary success as increase in percentage representation in the gene pool",
                    ],
                  },
                  {
                    id: "1c-ev-speciation",
                    title: "Speciation",
                    details: [
                      "Polymorphism",
                      "Adaptation and specialization",
                      "Inbreeding",
                      "Outbreeding",
                      "Bottlenecks",
                    ],
                  },
                  {
                    id: "1c-ev-time",
                    title:
                      "Evolutionary time as measured by gradual random changes in genome",
                  },
                ],
              },
            ],
          },
          {
            id: "1d",
            code: "1D",
            title: "Principles of bioenergetics and fuel molecule metabolism",
            description:
              "Focuses on the biomolecules and regulated pathways involved in harvesting chemical energy stored in fuel molecules, which serves as the driving force for all the processes that take place within a living system.",
            topics: [
              {
                id: "1d-bioenergetics",
                title: "Principles of Bioenergetics",
                course: "BC, GC",
                subtopics: [
                  {
                    id: "1d-be-thermo",
                    title: "Bioenergetics/thermodynamics",
                  },
                  {
                    id: "1d-be-freeenergy",
                    title: "Free energy/Keq",
                    details: [
                      "Equilibrium constant",
                      "Relationship of the equilibrium constant and delta-G",
                    ],
                  },
                  {
                    id: "1d-be-concentration",
                    title: "Concentration",
                    details: ["Le Chatelier's Principle"],
                  },
                  {
                    id: "1d-be-endoexo",
                    title: "Endothermic and exothermic reactions",
                  },
                  { id: "1d-be-g", title: "Free energy: G" },
                  {
                    id: "1d-be-spontaneous",
                    title: "Spontaneous reactions and delta-G",
                  },
                  {
                    id: "1d-be-phosphoryl",
                    title: "Phosphoryl group transfers and ATP",
                    details: [
                      "ATP hydrolysis delta-G << 0",
                      "ATP group transfers",
                    ],
                  },
                  {
                    id: "1d-be-oxidation",
                    title: "Biological oxidation-reduction",
                    details: [
                      "Half-reactions",
                      "Soluble electron carriers",
                      "Flavoproteins",
                    ],
                  },
                ],
              },
              {
                id: "1d-carbohydrates",
                title: "Carbohydrates",
                course: "BC, OC",
                subtopics: [
                  {
                    id: "1d-ch-desc",
                    title: "Description",
                    details: [
                      "Nomenclature and classification, common names",
                      "Absolute configuration",
                      "Cyclic structure and conformations of hexoses",
                      "Epimers and anomers",
                    ],
                  },
                  {
                    id: "1d-ch-hydrolysis",
                    title: "Hydrolysis of the glycoside linkage",
                  },
                  { id: "1d-ch-mono", title: "Monosaccharides" },
                  { id: "1d-ch-di", title: "Disaccharides" },
                  { id: "1d-ch-poly", title: "Polysaccharides" },
                ],
              },
              {
                id: "1d-glycolysis",
                title:
                  "Glycolysis, Gluconeogenesis, and the Pentose Phosphate Pathway",
                course: "BIO, BC",
                subtopics: [
                  {
                    id: "1d-gl-aerobic",
                    title: "Glycolysis (aerobic), substrates and products",
                    details: [
                      "Feeder pathways: glycogen, starch metabolism",
                    ],
                  },
                  {
                    id: "1d-gl-fermentation",
                    title: "Fermentation (anaerobic glycolysis)",
                  },
                  { id: "1d-gl-gluconeo", title: "Gluconeogenesis" },
                  {
                    id: "1d-gl-pentose",
                    title: "Pentose phosphate pathway",
                  },
                  {
                    id: "1d-gl-net",
                    title:
                      "Net molecular and energetic results of respiration processes",
                  },
                ],
              },
              {
                id: "1d-metabolic-reg",
                title: "Principles of Metabolic Regulation",
                course: "BC",
                subtopics: [
                  {
                    id: "1d-mr-regulation",
                    title: "Regulation of metabolic pathways",
                    details: ["Maintenance of a dynamic steady state"],
                  },
                  {
                    id: "1d-mr-glycolysis",
                    title: "Regulation of glycolysis and gluconeogenesis",
                  },
                  {
                    id: "1d-mr-glycogen",
                    title: "Metabolism of glycogen",
                  },
                  {
                    id: "1d-mr-regulation-glycogen",
                    title: "Regulation of glycogen synthesis and breakdown",
                    details: ["Allosteric and hormonal control"],
                  },
                  {
                    id: "1d-mr-analysis",
                    title: "Analysis of metabolic control",
                  },
                ],
              },
              {
                id: "1d-citric-acid",
                title: "Citric Acid Cycle",
                course: "BIO, BC",
                subtopics: [
                  {
                    id: "1d-ca-acetyl",
                    title: "Acetyl-CoA production",
                  },
                  {
                    id: "1d-ca-reactions",
                    title: "Reactions of the cycle, substrates and products",
                  },
                  {
                    id: "1d-ca-regulation",
                    title: "Regulation of the cycle",
                  },
                  {
                    id: "1d-ca-net",
                    title:
                      "Net molecular and energetic results of respiration processes",
                  },
                ],
              },
              {
                id: "1d-fatty-acids",
                title: "Metabolism of Fatty Acids and Proteins",
                course: "BIO, BC",
                subtopics: [
                  {
                    id: "1d-fa-desc",
                    title: "Description of fatty acids",
                  },
                  {
                    id: "1d-fa-digestion",
                    title: "Digestion, mobilization, and transport of fats",
                  },
                  {
                    id: "1d-fa-oxidation",
                    title: "Oxidation of fatty acids",
                    details: ["Saturated fats", "Unsaturated fats"],
                  },
                  { id: "1d-fa-ketone", title: "Ketone bodies" },
                  { id: "1d-fa-anabolism", title: "Anabolism of fats" },
                  {
                    id: "1d-fa-nontemplate",
                    title:
                      "Nontemplate synthesis: biosynthesis of lipids and polysaccharides",
                  },
                  {
                    id: "1d-fa-protein",
                    title: "Metabolism of proteins",
                  },
                ],
              },
              {
                id: "1d-oxidative-phos",
                title: "Oxidative Phosphorylation",
                course: "BIO, BC",
                subtopics: [
                  {
                    id: "1d-op-etc",
                    title:
                      "Electron transport chain and oxidative phosphorylation, general features",
                  },
                  {
                    id: "1d-op-transfer",
                    title: "Electron transfer in mitochondria",
                    details: ["NADH, NADPH", "Flavoproteins", "Cytochromes"],
                  },
                  {
                    id: "1d-op-synthase",
                    title: "ATP synthase, chemiosmotic coupling",
                    details: ["Proton motive force"],
                  },
                  {
                    id: "1d-op-net",
                    title:
                      "Net molecular and energetic results of respiration processes",
                  },
                  {
                    id: "1d-op-regulation",
                    title: "Regulation of oxidative phosphorylation",
                  },
                  {
                    id: "1d-op-mito",
                    title: "Mitochondria, apoptosis, oxidative stress",
                  },
                ],
              },
              {
                id: "1d-hormonal",
                title: "Hormonal Regulation and Integration of Metabolism",
                course: "BC",
                subtopics: [
                  {
                    id: "1d-hr-integration",
                    title:
                      "Higher-level integration of hormone structure and function",
                  },
                  {
                    id: "1d-hr-tissue",
                    title: "Tissue-specific metabolism",
                  },
                  {
                    id: "1d-hr-fuel",
                    title: "Hormonal regulation of fuel metabolism",
                  },
                  {
                    id: "1d-hr-obesity",
                    title: "Obesity and regulation of body mass",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "fc2",
        number: 2,
        title:
          "Highly organized assemblies of molecules, cells, and organs interact to carry out the functions of living organisms.",
        description:
          "Cells are the basic unit of structure in all living things. Mechanisms of cell division provide for the growth and maintenance of organisms, and the continuation of the species.",
        categories: [
          {
            id: "2a",
            code: "2A",
            title:
              "Assemblies of molecules, cells, and groups of cells within single cellular and multicellular organisms",
            description:
              "Focuses on the assemblies of molecules, cells, and groups of cells within organisms that function to execute the processes necessary to maintain life.",
            topics: [
              {
                id: "2a-plasma-membrane",
                title: "Plasma Membrane",
                course: "BIO, BC",
                subtopics: [
                  {
                    id: "2a-pm-function",
                    title: "General function in cell containment",
                  },
                  {
                    id: "2a-pm-composition",
                    title: "Composition of membranes",
                    details: [
                      "Lipid components: Phospholipids, Steroids, Waxes",
                      "Protein components",
                      "Fluid mosaic model",
                    ],
                  },
                  { id: "2a-pm-dynamics", title: "Membrane dynamics" },
                  {
                    id: "2a-pm-transport",
                    title: "Solute transport across membranes",
                    details: [
                      "Thermodynamic considerations",
                      "Osmosis and colligative properties",
                      "Passive transport",
                      "Active transport and Sodium/potassium pump",
                    ],
                  },
                  { id: "2a-pm-channels", title: "Membrane channels" },
                  { id: "2a-pm-potential", title: "Membrane potential" },
                  { id: "2a-pm-receptors", title: "Membrane receptors" },
                  {
                    id: "2a-pm-exo",
                    title: "Exocytosis and endocytosis",
                  },
                  {
                    id: "2a-pm-junctions",
                    title: "Intercellular junctions",
                    details: [
                      "Gap junctions",
                      "Tight junctions",
                      "Desmosomes",
                    ],
                  },
                ],
              },
              {
                id: "2a-organelles",
                title:
                  "Membrane-Bound Organelles and Defining Characteristics of Eukaryotic Cells",
                course: "BIO",
                subtopics: [
                  {
                    id: "2a-or-defining",
                    title:
                      "Defining characteristics: membrane-bound nucleus, organelles, mitotic division",
                  },
                  {
                    id: "2a-or-nucleus",
                    title: "Nucleus",
                    details: [
                      "Compartmentalization, storage of genetic information",
                      "Nucleolus: location and function",
                      "Nuclear envelope, nuclear pores",
                    ],
                  },
                  {
                    id: "2a-or-mito",
                    title: "Mitochondria",
                    details: [
                      "Site of ATP production",
                      "Inner and outer membrane structure",
                      "Self-replication",
                    ],
                  },
                  { id: "2a-or-lyso", title: "Lysosomes" },
                  {
                    id: "2a-or-er",
                    title: "Endoplasmic reticulum",
                    details: [
                      "Rough and smooth components",
                      "Role in membrane biosynthesis",
                      "Role in biosynthesis of secreted proteins",
                    ],
                  },
                  { id: "2a-or-golgi", title: "Golgi apparatus" },
                  { id: "2a-or-perox", title: "Peroxisomes" },
                ],
              },
              {
                id: "2a-cytoskeleton",
                title: "Cytoskeleton",
                course: "BIO",
                subtopics: [
                  {
                    id: "2a-cs-function",
                    title: "General function in cell support and movement",
                  },
                  { id: "2a-cs-micro", title: "Microfilaments" },
                  { id: "2a-cs-tubules", title: "Microtubules" },
                  {
                    id: "2a-cs-intermediate",
                    title: "Intermediate filaments",
                  },
                  {
                    id: "2a-cs-cilia",
                    title: "Composition and function of cilia and flagella",
                  },
                  { id: "2a-cs-centrioles", title: "Centrioles, microtubule-organizing centers" },
                ],
              },
              {
                id: "2a-tissues",
                title: "Tissues Formed From Eukaryotic Cells",
                course: "BIO",
                subtopics: [
                  { id: "2a-ts-epithelial", title: "Epithelial cells" },
                  {
                    id: "2a-ts-connective",
                    title: "Connective tissue cells",
                  },
                ],
              },
            ],
          },
          {
            id: "2b",
            code: "2B",
            title:
              "The structure, growth, physiology, and genetics of prokaryotes and viruses",
            description:
              "Focuses on the structure, growth, physiology, and genetics of prokaryotes and the structure and life cycles of viruses.",
            topics: [
              {
                id: "2b-cell-theory",
                title: "Cell Theory",
                course: "BIO",
                subtopics: [
                  { id: "2b-ct-history", title: "History and development" },
                  { id: "2b-ct-impact", title: "Impact on biology" },
                ],
              },
              {
                id: "2b-prokaryotes",
                title: "Classification and Structure of Prokaryotic Cells",
                course: "BIO",
                subtopics: [
                  {
                    id: "2b-pk-domains",
                    title: "Prokaryotic domains: Archaea, Bacteria",
                  },
                  {
                    id: "2b-pk-shapes",
                    title: "Major classifications by shape: Bacilli, Spirilli, Cocci",
                  },
                  {
                    id: "2b-pk-lack",
                    title: "Lack of nuclear membrane and typical eukaryotic organelles",
                  },
                  { id: "2b-pk-wall", title: "Presence of cell wall in bacteria" },
                  { id: "2b-pk-flagella", title: "Flagellar propulsion, mechanism" },
                ],
              },
              {
                id: "2b-growth",
                title: "Growth and Physiology of Prokaryotic Cells",
                course: "BIO",
                subtopics: [
                  { id: "2b-gp-fission", title: "Reproduction by fission" },
                  {
                    id: "2b-gp-adaptability",
                    title: "High degree of genetic adaptability, antibiotic resistance",
                  },
                  { id: "2b-gp-exponential", title: "Exponential growth" },
                  { id: "2b-gp-anaerobic", title: "Anaerobic and aerobic variants" },
                  { id: "2b-gp-parasitic", title: "Parasitic and symbiotic" },
                  { id: "2b-gp-chemotaxis", title: "Chemotaxis" },
                ],
              },
              {
                id: "2b-genetics",
                title: "Genetics of Prokaryotic Cells",
                course: "BIO",
                subtopics: [
                  { id: "2b-ge-plasmids", title: "Plasmids, extragenomic DNA" },
                  { id: "2b-ge-transformation", title: "Transformation" },
                  { id: "2b-ge-conjugation", title: "Conjugation" },
                  { id: "2b-ge-transposons", title: "Transposons" },
                ],
              },
              {
                id: "2b-virus-structure",
                title: "Virus Structure",
                course: "BIO",
                subtopics: [
                  {
                    id: "2b-vs-general",
                    title: "General structural characteristics",
                  },
                  { id: "2b-vs-lack", title: "Lack of organelles and nucleus" },
                  { id: "2b-vs-phage", title: "Structural aspects of typical bacteriophage" },
                  { id: "2b-vs-genomic", title: "Genomic content: RNA or DNA" },
                  { id: "2b-vs-size", title: "Size relative to bacteria and eukaryotic cells" },
                ],
              },
              {
                id: "2b-virus-lifecycle",
                title: "Viral Life Cycle",
                course: "BIO",
                subtopics: [
                  {
                    id: "2b-vl-self",
                    title: "Self-replicating biological units within host cell",
                  },
                  {
                    id: "2b-vl-general",
                    title: "Generalized phage and animal virus life cycles",
                  },
                  { id: "2b-vl-transduction", title: "Transduction" },
                  {
                    id: "2b-vl-retrovirus",
                    title: "Retrovirus life cycle: integration, reverse transcriptase, HIV",
                  },
                  { id: "2b-vl-prions", title: "Prions and viroids" },
                ],
              },
            ],
          },
          {
            id: "2c",
            code: "2C",
            title:
              "Processes of cell division, differentiation, and specialization",
            description:
              "Focuses on the processes of cell and nuclear division and the mechanisms governing cell differentiation and specialization.",
            topics: [
              {
                id: "2c-mitosis",
                title: "Mitosis",
                course: "BIO",
                subtopics: [
                  {
                    id: "2c-mi-process",
                    title: "Mitotic process: prophase, metaphase, anaphase, telophase, interphase",
                  },
                  {
                    id: "2c-mi-structures",
                    title: "Mitotic structures",
                    details: [
                      "Centrioles, asters, spindles",
                      "Chromatids, centromeres, kinetochores",
                      "Nuclear membrane breakdown and reorganization",
                      "Mechanisms of chromosome movement",
                    ],
                  },
                  {
                    id: "2c-mi-phases",
                    title: "Phases of cell cycle: G0, G1, S, G2, M",
                  },
                  { id: "2c-mi-arrest", title: "Growth arrest" },
                  { id: "2c-mi-control", title: "Control of cell cycle" },
                  {
                    id: "2c-mi-cancer",
                    title: "Loss of cell cycle controls in cancer cells",
                  },
                ],
              },
              {
                id: "2c-biosignaling",
                title: "Biosignaling",
                course: "BC",
                subtopics: [
                  {
                    id: "2c-bs-oncogenes",
                    title: "Oncogenes, apoptosis",
                  },
                ],
              },
              {
                id: "2c-reproductive",
                title: "Reproductive System",
                course: "BIO",
                subtopics: [
                  { id: "2c-rs-gametogenesis", title: "Gametogenesis by meiosis" },
                  {
                    id: "2c-rs-ovum",
                    title: "Ovum and sperm",
                    details: [
                      "Differences in formation",
                      "Differences in morphology",
                      "Relative contribution to next generation",
                    ],
                  },
                  {
                    id: "2c-rs-sequence",
                    title: "Reproductive sequence: fertilization, implantation, development, birth",
                  },
                ],
              },
              {
                id: "2c-embryogenesis",
                title: "Embryogenesis",
                course: "BIO",
                subtopics: [
                  {
                    id: "2c-em-stages",
                    title: "Stages of early development",
                    details: [
                      "Fertilization",
                      "Cleavage",
                      "Blastula formation",
                      "Gastrulation",
                    ],
                  },
                  { id: "2c-em-movements", title: "First cell movements" },
                  {
                    id: "2c-em-germ",
                    title:
                      "Formation of primary germ layers (endoderm, mesoderm, ectoderm)",
                  },
                  { id: "2c-em-neurulation", title: "Neurulation" },
                  {
                    id: "2c-em-structures",
                    title: "Major structures arising out of primary germ layers",
                  },
                  { id: "2c-em-neural", title: "Neural crest" },
                  {
                    id: "2c-em-envgene",
                    title: "Environment-gene interaction in development",
                  },
                ],
              },
              {
                id: "2c-mechanisms",
                title: "Mechanisms of Development",
                course: "BIO",
                subtopics: [
                  {
                    id: "2c-md-specialization",
                    title: "Cell specialization",
                    details: ["Determination", "Differentiation", "Tissue types"],
                  },
                  { id: "2c-md-communication", title: "Cell-cell communication in development" },
                  { id: "2c-md-migration", title: "Cell migration" },
                  { id: "2c-md-pluripotency", title: "Pluripotency: stem cells" },
                  { id: "2c-md-genereg", title: "Gene regulation in development" },
                  { id: "2c-md-programmed", title: "Programmed cell death" },
                  { id: "2c-md-regenerative", title: "Regenerative capacity in various species" },
                  { id: "2c-md-senescence", title: "Senescence and aging" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "fc3",
        number: 3,
        title:
          "Complex systems of tissues and organs sense the internal and external environments of multicellular organisms and, through integrated functioning, maintain a stable internal environment.",
        description:
          "The interactions of organ systems involve complex regulatory mechanisms that help maintain a dynamic and healthy equilibrium.",
        categories: [
          {
            id: "3a",
            code: "3A",
            title:
              "Structure and functions of the nervous and endocrine systems and ways these systems coordinate the organ systems",
            description:
              "Focuses on the structure and functions of the nervous and endocrine systems and the ways the systems work together to coordinate the responses of other body systems.",
            topics: [
              {
                id: "3a-nervous",
                title: "Nervous System: Structure and Function",
                course: "BIO",
                subtopics: [
                  { id: "3a-ns-major", title: "Major functions" },
                  { id: "3a-ns-organization", title: "Organization of vertebrate nervous system" },
                  { id: "3a-ns-neurons", title: "Sensor and effector neurons" },
                  { id: "3a-ns-sympathetic", title: "Sympathetic and parasympathetic nervous systems" },
                  { id: "3a-ns-reflexes", title: "Reflexes: feedback loop, reflex arc" },
                  { id: "3a-ns-integration", title: "Integration with endocrine system: feedback control" },
                ],
              },
              {
                id: "3a-nerve-cell",
                title: "Nerve Cell",
                course: "BIO",
                subtopics: [
                  { id: "3a-nc-body", title: "Cell body: site of nucleus, organelles" },
                  { id: "3a-nc-dendrites", title: "Dendrites" },
                  { id: "3a-nc-axon", title: "Axon: structure and function" },
                  { id: "3a-nc-myelin", title: "Myelin sheath, Schwann cells" },
                  { id: "3a-nc-nodes", title: "Nodes of Ranvier" },
                  { id: "3a-nc-synapse", title: "Synapse and synaptic activity" },
                  { id: "3a-nc-resting", title: "Resting potential: electrochemical gradient" },
                  { id: "3a-nc-action", title: "Action potential: threshold, all-or-none, sodium-potassium pump" },
                  { id: "3a-nc-excitatory", title: "Excitatory and inhibitory nerve fibers" },
                  { id: "3a-nc-glial", title: "Glial cells, neuroglia" },
                ],
              },
              {
                id: "3a-biosignaling",
                title: "Biosignaling",
                course: "BC",
                subtopics: [
                  { id: "3a-bs-gated", title: "Gated ion channels: voltage gated, ligand gated" },
                  { id: "3a-bs-receptor", title: "Receptor enzymes" },
                  { id: "3a-bs-gprotein", title: "G protein-coupled receptors" },
                ],
              },
              {
                id: "3a-endocrine-sources",
                title: "Endocrine System: Hormones and Their Sources",
                course: "BIO",
                subtopics: [
                  { id: "3a-eh-function", title: "Function of endocrine system" },
                  { id: "3a-eh-definitions", title: "Definitions of endocrine gland, hormone" },
                  { id: "3a-eh-glands", title: "Major endocrine glands: names, locations, products" },
                  { id: "3a-eh-types", title: "Major types of hormones" },
                  { id: "3a-eh-neuro", title: "Neuroendocrinology" },
                ],
              },
              {
                id: "3a-endocrine-mechanisms",
                title: "Endocrine System: Mechanisms of Hormone Action",
                course: "BIO",
                subtopics: [
                  { id: "3a-em-cellular", title: "Cellular mechanisms of hormone action" },
                  { id: "3a-em-transport", title: "Transport of hormones: blood supply" },
                  { id: "3a-em-specificity", title: "Specificity of hormones: target tissue" },
                  { id: "3a-em-integration", title: "Integration with nervous system: feedback control" },
                  { id: "3a-em-second", title: "Regulation by second messengers" },
                ],
              },
            ],
          },
          {
            id: "3b",
            code: "3B",
            title: "Structure and integrative functions of the main organ systems",
            description:
              "Focuses on the structure and functions of the organ systems and the ways these systems interact to fulfill their roles in the maintenance and continuance of the living organism.",
            topics: [
              {
                id: "3b-respiratory",
                title: "Respiratory System",
                course: "BIO",
                subtopics: [
                  { id: "3b-rs-function", title: "General function: gas exchange, thermoregulation" },
                  { id: "3b-rs-structure", title: "Structure of lungs and alveoli" },
                  { id: "3b-rs-breathing", title: "Breathing mechanisms" },
                  { id: "3b-rs-thermo", title: "Thermoregulation" },
                  { id: "3b-rs-filtration", title: "Particulate filtration" },
                  { id: "3b-rs-alveolar", title: "Alveolar gas exchange" },
                  { id: "3b-rs-ph", title: "pH control" },
                  { id: "3b-rs-regulation", title: "Regulation by nervous control" },
                ],
              },
              {
                id: "3b-circulatory",
                title: "Circulatory System",
                course: "BIO",
                subtopics: [
                  { id: "3b-ci-functions", title: "Functions: circulation of oxygen, nutrients, hormones" },
                  { id: "3b-ci-thermo", title: "Role in thermoregulation" },
                  { id: "3b-ci-heart", title: "Four-chambered heart: structure and function" },
                  { id: "3b-ci-pressure", title: "Systolic and diastolic pressure" },
                  { id: "3b-ci-circulation", title: "Pulmonary and systemic circulation" },
                  { id: "3b-ci-vessels", title: "Arterial and venous systems" },
                  { id: "3b-ci-capillary", title: "Capillary beds" },
                  { id: "3b-ci-blood", title: "Composition of blood" },
                  { id: "3b-ci-coagulation", title: "Coagulation, clotting mechanisms" },
                  { id: "3b-ci-oxygen", title: "Oxygen transport by blood" },
                  { id: "3b-ci-co2", title: "Carbon dioxide transport" },
                  { id: "3b-ci-control", title: "Nervous and endocrine control" },
                ],
              },
              {
                id: "3b-lymphatic",
                title: "Lymphatic System",
                course: "BIO",
                subtopics: [
                  { id: "3b-ly-structure", title: "Structure of lymphatic system" },
                  { id: "3b-ly-functions", title: "Major functions" },
                ],
              },
              {
                id: "3b-immune",
                title: "Immune System",
                course: "BIO",
                subtopics: [
                  { id: "3b-im-innate", title: "Innate vs. adaptive immunity" },
                  { id: "3b-im-adaptive", title: "Adaptive immune system cells: T and B lymphocytes" },
                  { id: "3b-im-innate-cells", title: "Innate immune system cells: macrophages, phagocytes" },
                  { id: "3b-im-tissues", title: "Tissues: bone marrow, spleen, thymus, lymph nodes" },
                  { id: "3b-im-antigen", title: "Concept of antigen and antibody" },
                  { id: "3b-im-presentation", title: "Antigen presentation and clonal selection" },
                  { id: "3b-im-recognition", title: "Antigen-antibody recognition" },
                  { id: "3b-im-structure", title: "Structure of antibody molecule" },
                  { id: "3b-im-self", title: "Recognition of self vs. nonself, autoimmune diseases" },
                  { id: "3b-im-mhc", title: "Major histocompatibility complex" },
                ],
              },
              {
                id: "3b-digestive",
                title: "Digestive System",
                course: "BIO",
                subtopics: [
                  { id: "3b-di-ingestion", title: "Ingestion: saliva, esophagus" },
                  { id: "3b-di-stomach", title: "Stomach: storage, digestion, enzymes" },
                  { id: "3b-di-liver", title: "Liver: bile production, blood glucose regulation" },
                  { id: "3b-di-pancreas", title: "Pancreas: enzyme production and transport" },
                  { id: "3b-di-small", title: "Small intestine: absorption, villi, digestion" },
                  { id: "3b-di-large", title: "Large intestine: water absorption, bacterial flora" },
                  { id: "3b-di-rectum", title: "Rectum: storage and elimination" },
                  { id: "3b-di-muscular", title: "Muscular control: peristalsis" },
                  { id: "3b-di-endocrine", title: "Endocrine control" },
                  { id: "3b-di-nervous", title: "Nervous control: enteric nervous system" },
                ],
              },
              {
                id: "3b-excretory",
                title: "Excretory System",
                course: "BIO",
                subtopics: [
                  { id: "3b-ex-homeostasis", title: "Roles in homeostasis" },
                  { id: "3b-ex-kidney", title: "Kidney structure: cortex, medulla" },
                  { id: "3b-ex-nephron", title: "Nephron structure" },
                  { id: "3b-ex-urine", title: "Formation of urine" },
                  { id: "3b-ex-storage", title: "Storage and elimination" },
                  { id: "3b-ex-osmo", title: "Osmoregulation" },
                ],
              },
              {
                id: "3b-reproductive-sys",
                title: "Reproductive System",
                course: "BIO",
                subtopics: [
                  { id: "3b-rp-structures", title: "Male and female reproductive structures" },
                  { id: "3b-rp-hormonal", title: "Hormonal control of reproduction" },
                ],
              },
              {
                id: "3b-muscle",
                title: "Muscle System",
                course: "BIO",
                subtopics: [
                  { id: "3b-mu-functions", title: "Important functions: mobility, circulation, thermoregulation" },
                  { id: "3b-mu-types", title: "Structure of three basic muscle types" },
                  { id: "3b-mu-contraction", title: "Muscle structure and control of contraction" },
                  { id: "3b-mu-cardiac", title: "Regulation of cardiac muscle contraction" },
                  { id: "3b-mu-oxygen", title: "Oxygen debt: fatigue" },
                  { id: "3b-mu-nervous", title: "Nervous control" },
                ],
              },
              {
                id: "3b-muscle-cell",
                title: "Specialized Cell: Muscle Cell",
                course: "BIO",
                subtopics: [
                  { id: "3b-mc-characteristics", title: "Structural characteristics" },
                  { id: "3b-mc-mito", title: "Abundant mitochondria in red muscle cells" },
                  { id: "3b-mc-contractile", title: "Organization of contractile elements: actin and myosin" },
                  { id: "3b-mc-sarcomeres", title: "Sarcomeres: I and A bands, M and Z lines, H zone" },
                  { id: "3b-mc-troponin", title: "Troponin and tropomyosin" },
                  { id: "3b-mc-calcium", title: "Calcium regulation of contraction" },
                ],
              },
              {
                id: "3b-skeletal",
                title: "Skeletal System",
                course: "BIO",
                subtopics: [
                  { id: "3b-sk-functions", title: "Functions: support, calcium storage, protection" },
                  { id: "3b-sk-structure", title: "Skeletal structure" },
                  { id: "3b-sk-bone", title: "Bone structure" },
                  { id: "3b-sk-cartilage", title: "Cartilage: structure and function" },
                  { id: "3b-sk-ligaments", title: "Ligaments, tendons" },
                  { id: "3b-sk-endocrine", title: "Endocrine control" },
                ],
              },
              {
                id: "3b-skin",
                title: "Skin System",
                course: "BIO",
                subtopics: [
                  { id: "3b-sn-structure", title: "Structure: layer differentiation, cell types" },
                  { id: "3b-sn-homeostasis", title: "Functions in homeostasis and osmoregulation" },
                  { id: "3b-sn-thermo", title: "Functions in thermoregulation" },
                  { id: "3b-sn-protection", title: "Physical protection" },
                  { id: "3b-sn-hormonal", title: "Hormonal control" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "chem-phys",
    title: "Chemical and Physical Foundations of Biological Systems",
    shortTitle: "Chem/Phys",
    color: "#059669",
    description:
      "Solve problems by combining your knowledge of chemical and physical foundational concepts with your scientific inquiry and reasoning skills. Tests understanding of the mechanical, physical, and biochemical functions of human tissues, organs, and organ systems.",
    questionCount: 59,
    timeMinutes: 95,
    disciplines: [
      { name: "First-semester biochemistry", percentage: 25 },
      { name: "Introductory biology", percentage: 5 },
      { name: "General chemistry", percentage: 30 },
      { name: "Organic chemistry", percentage: 15 },
      { name: "Introductory physics", percentage: 25 },
    ],
    foundationalConcepts: [
      {
        id: "fc4",
        number: 4,
        title:
          "Complex living organisms transport materials, sense their environment, process signals, and respond to changes using processes understood in terms of physical principles.",
        description:
          "The processes that take place within organisms follow the laws of physics and can be quantified with equations that model behavior at a fundamental level.",
        categories: [
          {
            id: "4a",
            code: "4A",
            title:
              "Translational motion, forces, work, energy, and equilibrium in living systems",
            description:
              "Covers several physics topics relevant to living systems including translational motion, forces, work, energy, and equilibrium.",
            topics: [
              {
                id: "4a-translational",
                title: "Translational Motion",
                course: "PHY",
                subtopics: [
                  { id: "4a-tm-units", title: "Units and dimensions" },
                  { id: "4a-tm-vectors", title: "Vectors, components" },
                  { id: "4a-tm-addition", title: "Vector addition" },
                  { id: "4a-tm-velocity", title: "Speed, velocity (average and instantaneous)" },
                  { id: "4a-tm-acceleration", title: "Acceleration" },
                ],
              },
              {
                id: "4a-force",
                title: "Force",
                course: "PHY",
                subtopics: [
                  { id: "4a-fo-first", title: "Newton's First Law, inertia" },
                  { id: "4a-fo-second", title: "Newton's Second Law (F = ma)" },
                  { id: "4a-fo-third", title: "Newton's Third Law" },
                  { id: "4a-fo-friction", title: "Friction, static and kinetic" },
                  { id: "4a-fo-center", title: "Center of mass" },
                ],
              },
              {
                id: "4a-equilibrium",
                title: "Equilibrium",
                course: "PHY",
                subtopics: [
                  { id: "4a-eq-vector", title: "Vector analysis of forces" },
                  { id: "4a-eq-torques", title: "Torques, lever arms" },
                ],
              },
              {
                id: "4a-work",
                title: "Work",
                course: "PHY",
                subtopics: [
                  { id: "4a-wo-constant", title: "Work done by a constant force" },
                  { id: "4a-wo-mechanical", title: "Mechanical advantage" },
                  { id: "4a-wo-kinetic", title: "Work Kinetic Energy Theorem" },
                  { id: "4a-wo-conservative", title: "Conservative forces" },
                ],
              },
              {
                id: "4a-energy",
                title: "Energy of Point Object Systems",
                course: "PHY",
                subtopics: [
                  { id: "4a-en-kinetic", title: "Kinetic Energy: KE = 1/2 mv^2" },
                  { id: "4a-en-potential", title: "Potential Energy" },
                  { id: "4a-en-conservation", title: "Conservation of energy" },
                  { id: "4a-en-power", title: "Power, units" },
                ],
              },
              {
                id: "4a-periodic",
                title: "Periodic Motion",
                course: "PHY",
                subtopics: [
                  { id: "4a-pm-amplitude", title: "Amplitude, frequency, phase" },
                  { id: "4a-pm-waves", title: "Transverse and longitudinal waves" },
                ],
              },
            ],
          },
          {
            id: "4b",
            code: "4B",
            title:
              "Importance of fluids for the circulation of blood, gas movement, and gas exchange",
            description:
              "Covers hydrostatic pressure, fluid flow rates, viscosity, the Kinetic Molecular Theory of Gases, and the Ideal Gas Law.",
            topics: [
              {
                id: "4b-fluids",
                title: "Fluids",
                course: "PHY",
                subtopics: [
                  { id: "4b-fl-density", title: "Density, specific gravity" },
                  { id: "4b-fl-buoyancy", title: "Buoyancy, Archimedes' Principle" },
                  { id: "4b-fl-hydrostatic", title: "Hydrostatic pressure, Pascal's Law" },
                  { id: "4b-fl-viscosity", title: "Viscosity: Poiseuille Flow" },
                  { id: "4b-fl-continuity", title: "Continuity equation" },
                  { id: "4b-fl-turbulence", title: "Concept of turbulence" },
                  { id: "4b-fl-surface", title: "Surface tension" },
                  { id: "4b-fl-bernoulli", title: "Bernoulli's equation" },
                  { id: "4b-fl-venturi", title: "Venturi effect, pitot tube" },
                ],
              },
              {
                id: "4b-gas",
                title: "Gas Phase",
                course: "GC, PHY",
                subtopics: [
                  { id: "4b-ga-temperature", title: "Absolute temperature, Kelvin scale" },
                  { id: "4b-ga-pressure", title: "Pressure, simple mercury barometer" },
                  { id: "4b-ga-ideal", title: "Ideal gas: PV = nRT, Boyle's, Charles', Avogadro's Laws" },
                  { id: "4b-ga-kinetic", title: "Kinetic Molecular Theory of Gases" },
                  { id: "4b-ga-deviation", title: "Deviation of real gas behavior, Van der Waals" },
                  { id: "4b-ga-partial", title: "Partial pressure, mole fraction, Dalton's Law" },
                ],
              },
            ],
          },
          {
            id: "4c",
            code: "4C",
            title: "Electrochemistry and electrical circuits and their elements",
            description:
              "Covers electrical circuit elements, electrical circuits, and electrochemistry.",
            topics: [
              {
                id: "4c-electrostatics",
                title: "Electrostatics",
                course: "PHY",
                subtopics: [
                  { id: "4c-es-charge", title: "Charge, conductors, charge conservation" },
                  { id: "4c-es-coulombs", title: "Coulomb's Law" },
                  { id: "4c-es-field", title: "Electric field E" },
                  { id: "4c-es-potential", title: "Electrostatic energy, electric potential" },
                ],
              },
              {
                id: "4c-circuits",
                title: "Circuit Elements",
                course: "PHY",
                subtopics: [
                  { id: "4c-ci-current", title: "Current, sign conventions, units" },
                  { id: "4c-ci-emf", title: "Electromotive force, voltage" },
                  { id: "4c-ci-resistance", title: "Resistance: Ohm's Law, series, parallel" },
                  { id: "4c-ci-capacitance", title: "Capacitance: parallel plate, energy, series, parallel" },
                  { id: "4c-ci-conductivity", title: "Conductivity: metallic, electrolytic" },
                  { id: "4c-ci-meters", title: "Meters" },
                ],
              },
              {
                id: "4c-magnetism",
                title: "Magnetism",
                course: "PHY",
                subtopics: [
                  { id: "4c-ma-field", title: "Definition of magnetic field B" },
                  { id: "4c-ma-lorentz", title: "Motion of charged particles, Lorentz force" },
                ],
              },
              {
                id: "4c-electrochemistry",
                title: "Electrochemistry",
                course: "GC",
                subtopics: [
                  { id: "4c-ec-electrolytic", title: "Electrolytic cell: electrolysis, Faraday's Law" },
                  { id: "4c-ec-galvanic", title: "Galvanic/Voltaic cells: half-reactions, reduction potentials" },
                  { id: "4c-ec-concentration", title: "Concentration cell" },
                  { id: "4c-ec-batteries", title: "Batteries" },
                ],
              },
            ],
          },
          {
            id: "4d",
            code: "4D",
            title: "How light and sound interact with matter",
            description:
              "Covers the properties of both light and sound and how these energy waves interact with matter.",
            topics: [
              {
                id: "4d-sound",
                title: "Sound",
                course: "PHY",
                subtopics: [
                  { id: "4d-so-production", title: "Production of sound" },
                  { id: "4d-so-speed", title: "Relative speed in solids, liquids, and gases" },
                  { id: "4d-so-intensity", title: "Intensity, decibel units, log scale" },
                  { id: "4d-so-doppler", title: "Doppler Effect" },
                  { id: "4d-so-resonance", title: "Resonance in pipes and strings" },
                  { id: "4d-so-ultrasound", title: "Ultrasound" },
                ],
              },
              {
                id: "4d-light",
                title: "Light, Electromagnetic Radiation",
                course: "PHY",
                subtopics: [
                  { id: "4d-li-interference", title: "Interference; Young's double-slit experiment" },
                  { id: "4d-li-diffraction", title: "Thin films, diffraction grating, single-slit diffraction" },
                  { id: "4d-li-polarization", title: "Polarization of light" },
                  { id: "4d-li-properties", title: "Properties of electromagnetic radiation" },
                  { id: "4d-li-spectrum", title: "Classification of electromagnetic spectrum" },
                ],
              },
              {
                id: "4d-absorption",
                title: "Molecular Structure and Absorption Spectra",
                course: "OC",
                subtopics: [
                  { id: "4d-ab-infrared", title: "Infrared region" },
                  { id: "4d-ab-visible", title: "Visible region" },
                  { id: "4d-ab-uv", title: "Ultraviolet region" },
                  { id: "4d-ab-nmr", title: "NMR spectroscopy" },
                ],
              },
              {
                id: "4d-optics",
                title: "Geometrical Optics",
                course: "PHY",
                subtopics: [
                  { id: "4d-op-reflection", title: "Reflection from plane surface" },
                  { id: "4d-op-refraction", title: "Refraction, Snell's law" },
                  { id: "4d-op-total", title: "Total internal reflection" },
                  { id: "4d-op-mirrors", title: "Spherical mirrors" },
                  { id: "4d-op-lenses", title: "Thin lenses" },
                  { id: "4d-op-eye", title: "Optical instruments, including the human eye" },
                ],
              },
            ],
          },
          {
            id: "4e",
            code: "4E",
            title:
              "Atoms, nuclear decay, electronic structure, and atomic chemical behavior",
            description:
              "Covers atomic structure, nuclear decay, electronic structure, and the periodic nature of atomic chemical behavior.",
            topics: [
              {
                id: "4e-nucleus",
                title: "Atomic Nucleus",
                course: "PHY, GC",
                subtopics: [
                  { id: "4e-an-number", title: "Atomic number, atomic weight" },
                  { id: "4e-an-neutrons", title: "Neutrons, protons, isotopes" },
                  { id: "4e-an-forces", title: "Nuclear forces, binding energy" },
                  { id: "4e-an-decay", title: "Radioactive decay: alpha, beta, gamma" },
                  { id: "4e-an-mass-spec", title: "Mass spectrometer and spectroscopy" },
                ],
              },
              {
                id: "4e-electronic",
                title: "Electronic Structure",
                course: "PHY, GC",
                subtopics: [
                  { id: "4e-el-orbital", title: "Orbital structure of hydrogen atom" },
                  { id: "4e-el-ground", title: "Ground state, excited states" },
                  { id: "4e-el-spectra", title: "Absorption and emission line spectra" },
                  { id: "4e-el-pauli", title: "Pauli Exclusion Principle" },
                  { id: "4e-el-magnetism", title: "Paramagnetism and diamagnetism" },
                  { id: "4e-el-bohr", title: "Bohr atom" },
                  { id: "4e-el-heisenberg", title: "Heisenberg Uncertainty Principle" },
                  { id: "4e-el-photoelectric", title: "Photoelectric effect" },
                ],
              },
              {
                id: "4e-periodic-groups",
                title: "The Periodic Table: Classification of Elements",
                course: "GC",
                subtopics: [
                  { id: "4e-pt-alkali", title: "Alkali metals" },
                  { id: "4e-pt-alkaline", title: "Alkaline earth metals" },
                  { id: "4e-pt-halogens", title: "Halogens" },
                  { id: "4e-pt-noble", title: "Noble gases" },
                  { id: "4e-pt-transition", title: "Transition metals" },
                ],
              },
              {
                id: "4e-periodic-variations",
                title: "The Periodic Table: Variations of Chemical Properties",
                course: "GC",
                subtopics: [
                  { id: "4e-pv-valence", title: "Valence electrons" },
                  { id: "4e-pv-ionization", title: "First and second ionization energy" },
                  { id: "4e-pv-affinity", title: "Electron affinity" },
                  { id: "4e-pv-electronegativity", title: "Electronegativity" },
                  { id: "4e-pv-shells", title: "Electron shells and sizes of atoms and ions" },
                ],
              },
              {
                id: "4e-stoichiometry",
                title: "Stoichiometry",
                course: "GC",
                subtopics: [
                  { id: "4e-st-molecular", title: "Molecular weight" },
                  { id: "4e-st-empirical", title: "Empirical vs. molecular formula" },
                  { id: "4e-st-mole", title: "Mole concept, Avogadro's number" },
                  { id: "4e-st-oxidation", title: "Oxidation number" },
                  { id: "4e-st-equations", title: "Description of reactions by chemical equations" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "fc5",
        number: 5,
        title:
          "The principles that govern chemical interactions and reactions form the basis for a broader understanding of the molecular dynamics of living systems.",
        description:
          "The chemical processes that take place within organisms are readily understood within the framework of solution behavior, thermodynamics, molecular structure, and reactivity.",
        categories: [
          {
            id: "5a",
            code: "5A",
            title: "Unique nature of water and its solutions",
            description:
              "Covers the nature of solutions, solubility, acids, bases, and buffers.",
            topics: [
              {
                id: "5a-acid-base",
                title: "Acid-Base Equilibria",
                course: "GC, BC",
                subtopics: [
                  { id: "5a-ab-bronsted", title: "Bronsted-Lowry definition" },
                  { id: "5a-ab-ionization", title: "Ionization of water, Kw, pH" },
                  { id: "5a-ab-conjugate", title: "Conjugate acids and bases" },
                  { id: "5a-ab-strong", title: "Strong acids and bases" },
                  { id: "5a-ab-weak", title: "Weak acids and bases" },
                  { id: "5a-ab-ka", title: "Equilibrium constants Ka and Kb" },
                  { id: "5a-ab-buffers", title: "Buffers: definition, concepts, common systems" },
                ],
              },
              {
                id: "5a-ions",
                title: "Ions in Solutions",
                course: "GC, BC",
                subtopics: [
                  { id: "5a-io-common", title: "Anion, cation: common names and charges" },
                  { id: "5a-io-hydration", title: "Hydration, the hydronium ion" },
                ],
              },
              {
                id: "5a-solubility",
                title: "Solubility",
                course: "GC",
                subtopics: [
                  { id: "5a-so-units", title: "Units of concentration" },
                  { id: "5a-so-ksp", title: "Solubility product constant Ksp" },
                  { id: "5a-so-common-ion", title: "Common-ion effect" },
                ],
              },
              {
                id: "5a-titration",
                title: "Titration",
                course: "GC",
                subtopics: [
                  { id: "5a-ti-indicators", title: "Indicators" },
                  { id: "5a-ti-neutralization", title: "Neutralization" },
                  { id: "5a-ti-curves", title: "Interpretation of titration curves" },
                  { id: "5a-ti-redox", title: "Redox titration" },
                ],
              },
            ],
          },
          {
            id: "5b",
            code: "5B",
            title: "Nature of molecules and intermolecular interactions",
            description:
              "Covers the nature of molecules including covalent bonding, molecular structure, and intermolecular interactions.",
            topics: [
              {
                id: "5b-covalent",
                title: "Covalent Bond",
                course: "GC",
                subtopics: [
                  { id: "5b-co-lewis", title: "Lewis electron dot formulas" },
                  { id: "5b-co-partial", title: "Partial ionic character, dipole moment" },
                  { id: "5b-co-sigma-pi", title: "Sigma and pi bonds, hybrid orbitals" },
                  { id: "5b-co-multiple", title: "Multiple bonding" },
                  { id: "5b-co-stereo", title: "Stereochemistry of covalently bonded molecules" },
                ],
              },
              {
                id: "5b-intermolecular",
                title: "Liquid Phase: Intermolecular Forces",
                course: "GC",
                subtopics: [
                  { id: "5b-im-hydrogen", title: "Hydrogen bonding" },
                  { id: "5b-im-dipole", title: "Dipole interactions" },
                  { id: "5b-im-vanderwaals", title: "Van der Waals' Forces (London dispersion forces)" },
                ],
              },
            ],
          },
          {
            id: "5c",
            code: "5C",
            title: "Separation and purification methods",
            description:
              "Covers separation and purification methods including extraction, chromatography, and electrophoresis.",
            topics: [
              {
                id: "5c-separations",
                title: "Separations and Purifications",
                course: "OC, BC",
                subtopics: [
                  { id: "5c-sp-extraction", title: "Extraction" },
                  { id: "5c-sp-distillation", title: "Distillation" },
                  { id: "5c-sp-chromatography", title: "Chromatography: column, paper, thin-layer" },
                  { id: "5c-sp-protein", title: "Separation and purification of peptides and proteins" },
                  { id: "5c-sp-racemic", title: "Racemic mixtures, separation of enantiomers" },
                ],
              },
            ],
          },
          {
            id: "5d",
            code: "5D",
            title:
              "Structure, function, and reactivity of biologically relevant molecules",
            description:
              "Covers the structure, function, and reactivity of biologically relevant molecules.",
            topics: [
              {
                id: "5d-nucleotides",
                title: "Nucleotides and Nucleic Acids",
                course: "BC, BIO",
                subtopics: [
                  { id: "5d-nu-composition", title: "Nucleotides and nucleosides: composition" },
                  { id: "5d-nu-dna-rna", title: "DNA and RNA structures" },
                  { id: "5d-nu-chemistry", title: "Chemistry" },
                ],
              },
              {
                id: "5d-amino-acids",
                title: "Amino Acids, Peptides, Proteins",
                course: "OC, BC",
                subtopics: [
                  { id: "5d-aa-description", title: "Amino acids: description and classification" },
                  { id: "5d-aa-synthesis", title: "Synthesis of alpha-amino acids" },
                  { id: "5d-aa-reactions", title: "Peptides and proteins: reactions" },
                  { id: "5d-aa-principles", title: "General principles of protein structure" },
                ],
              },
              {
                id: "5d-3d-protein",
                title: "The Three-Dimensional Protein Structure",
                course: "BC",
                subtopics: [
                  { id: "5d-3d-stability", title: "Conformational stability" },
                  { id: "5d-3d-quaternary", title: "Quaternary structure" },
                  { id: "5d-3d-denaturing", title: "Denaturing and folding" },
                ],
              },
              {
                id: "5d-lipids",
                title: "Lipids",
                course: "BC, OC",
                subtopics: [
                  { id: "5d-li-storage", title: "Storage lipids: triacylglycerols, free fatty acids" },
                  { id: "5d-li-structural", title: "Structural lipids: phospholipids, sphingolipids, waxes" },
                  { id: "5d-li-signals", title: "Signals and cofactors: vitamins, steroids, prostaglandins" },
                ],
              },
              {
                id: "5d-carbs",
                title: "Carbohydrates",
                course: "OC",
                subtopics: [
                  { id: "5d-ca-description", title: "Description and classification" },
                  { id: "5d-ca-hydrolysis", title: "Hydrolysis of the glycoside linkage" },
                  { id: "5d-ca-tautomerism", title: "Keto-enol tautomerism" },
                ],
              },
              {
                id: "5d-aldehydes",
                title: "Aldehydes and Ketones",
                course: "OC",
                subtopics: [
                  { id: "5d-ak-description", title: "Description and nomenclature" },
                  { id: "5d-ak-reactions", title: "Important reactions: nucleophilic addition, oxidation" },
                  { id: "5d-ak-enolate", title: "Enolate chemistry" },
                ],
              },
              {
                id: "5d-alcohols",
                title: "Alcohols",
                course: "OC",
                subtopics: [
                  { id: "5d-al-description", title: "Description and physical properties" },
                  { id: "5d-al-reactions", title: "Important reactions: oxidation, substitution" },
                ],
              },
              {
                id: "5d-carboxylic",
                title: "Carboxylic Acids",
                course: "OC",
                subtopics: [
                  { id: "5d-cx-description", title: "Description and nomenclature" },
                  { id: "5d-cx-reactions", title: "Important reactions" },
                ],
              },
              {
                id: "5d-acid-derivatives",
                title: "Acid Derivatives (Anhydrides, Amides, Esters)",
                course: "OC",
                subtopics: [
                  { id: "5d-ad-description", title: "Description and nomenclature" },
                  { id: "5d-ad-reactions", title: "Important reactions" },
                  { id: "5d-ad-principles", title: "General principles: reactivity, steric and electronic effects" },
                ],
              },
              {
                id: "5d-phenols",
                title: "Phenols",
                course: "OC, BC",
                subtopics: [
                  { id: "5d-ph-redox", title: "Oxidation and reduction: hydroquinones, ubiquinones" },
                ],
              },
              {
                id: "5d-heterocyclic",
                title: "Polycyclic and Heterocyclic Aromatic Compounds",
                course: "OC, BC",
                subtopics: [
                  { id: "5d-hc-biological", title: "Biological aromatic heterocycles" },
                ],
              },
            ],
          },
          {
            id: "5e",
            code: "5E",
            title: "Principles of chemical thermodynamics and kinetics",
            description:
              "Covers all principles of chemical thermodynamics and kinetics including enzymatic catalysis.",
            topics: [
              {
                id: "5e-enzymes",
                title: "Enzymes",
                course: "BC, BIO",
                subtopics: [
                  { id: "5e-en-classification", title: "Classification by reaction type" },
                  { id: "5e-en-mechanism", title: "Mechanism: substrates, active-site, induced-fit" },
                  { id: "5e-en-kinetics", title: "Kinetics: Michaelis-Menten, cooperativity" },
                  { id: "5e-en-inhibition", title: "Inhibition" },
                  { id: "5e-en-regulatory", title: "Regulatory enzymes: allosteric, covalently modified" },
                ],
              },
              {
                id: "5e-bioenergetics",
                title: "Principles of Bioenergetics",
                course: "BC",
                subtopics: [
                  { id: "5e-be-thermo", title: "Bioenergetics/thermodynamics" },
                  { id: "5e-be-phosphorylation", title: "Phosphorylation/ATP" },
                  { id: "5e-be-oxidation", title: "Biological oxidation-reduction" },
                ],
              },
              {
                id: "5e-thermo",
                title: "Energy Changes in Chemical Reactions",
                course: "GC, PHY",
                subtopics: [
                  { id: "5e-th-system", title: "Thermodynamic system, state function" },
                  { id: "5e-th-zeroth", title: "Zeroth Law: concept of temperature" },
                  { id: "5e-th-first", title: "First Law: conservation of energy" },
                  { id: "5e-th-second", title: "Second Law: concept of entropy" },
                  { id: "5e-th-calorimetry", title: "Calorimetry, heat capacity, specific heat" },
                  { id: "5e-th-transfer", title: "Heat transfer: conduction, convection, radiation" },
                  { id: "5e-th-endoexo", title: "Endothermic and exothermic reactions, Hess' Law" },
                  { id: "5e-th-free-energy", title: "Free energy G, spontaneous reactions" },
                  { id: "5e-th-phase", title: "Phase diagram: pressure and temperature" },
                ],
              },
              {
                id: "5e-kinetics",
                title: "Rate Processes in Chemical Reactions",
                course: "GC",
                subtopics: [
                  { id: "5e-ki-rate", title: "Reaction rate and rate law" },
                  { id: "5e-ki-determining", title: "Rate-determining step" },
                  { id: "5e-ki-temperature", title: "Dependence on temperature, activation energy" },
                  { id: "5e-ki-arrhenius", title: "Arrhenius Equation" },
                  { id: "5e-ki-control", title: "Kinetic vs. thermodynamic control" },
                  { id: "5e-ki-catalysts", title: "Catalysts" },
                  { id: "5e-ki-equilibrium", title: "Equilibrium in reversible reactions" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "psych-soc",
    title: "Psychological, Social, and Biological Foundations of Behavior",
    shortTitle: "Psych/Soc",
    color: "#7c3aed",
    description:
      "Solve problems by combining your knowledge of foundational concepts in psychology, sociology, and biology with your scientific inquiry and reasoning skills. Tests understanding of the ways these factors influence perceptions, reactions, behavior, and well-being.",
    questionCount: 59,
    timeMinutes: 95,
    disciplines: [
      { name: "Introductory psychology", percentage: 65 },
      { name: "Introductory sociology", percentage: 30 },
      { name: "Introductory biology", percentage: 5 },
    ],
    foundationalConcepts: [
      {
        id: "fc6",
        number: 6,
        title:
          "Biological, psychological, and sociocultural factors influence the ways that individuals perceive, think about, and react to the world.",
        description:
          "The way we sense, perceive, think about, and react to stimuli affects our experiences.",
        categories: [
          {
            id: "6a",
            code: "6A",
            title: "Sensing the environment",
            description:
              "Covers sensation and perception across all human senses.",
            topics: [
              {
                id: "6a-sensory",
                title: "Sensory Processing",
                course: "PSY, BIO",
                subtopics: [
                  { id: "6a-sp-sensation", title: "Sensation: threshold, Weber's Law, signal detection theory" },
                  { id: "6a-sp-adaptation", title: "Sensory adaptation" },
                  { id: "6a-sp-receptors", title: "Sensory receptors and pathways" },
                ],
              },
              {
                id: "6a-vision",
                title: "Vision",
                course: "PSY, BIO",
                subtopics: [
                  { id: "6a-vi-structure", title: "Structure and function of the eye" },
                  { id: "6a-vi-processing", title: "Visual processing: pathways, parallel processing, feature detection" },
                ],
              },
              {
                id: "6a-hearing",
                title: "Hearing",
                course: "PSY, BIO",
                subtopics: [
                  { id: "6a-he-structure", title: "Structure and function of the ear" },
                  { id: "6a-he-processing", title: "Auditory processing" },
                  { id: "6a-he-hair", title: "Sensory reception by hair cells" },
                ],
              },
              {
                id: "6a-other-senses",
                title: "Other Senses",
                course: "PSY, BIO",
                subtopics: [
                  { id: "6a-os-soma", title: "Somatosensation (e.g., pain perception)" },
                  { id: "6a-os-taste", title: "Taste" },
                  { id: "6a-os-smell", title: "Smell: olfactory cells, pheromones" },
                  { id: "6a-os-kinesthetic", title: "Kinesthetic sense" },
                  { id: "6a-os-vestibular", title: "Vestibular sense" },
                ],
              },
              {
                id: "6a-perception",
                title: "Perception",
                course: "PSY",
                subtopics: [
                  { id: "6a-pe-processing", title: "Bottom-up/top-down processing" },
                  { id: "6a-pe-organization", title: "Perceptual organization: depth, form, motion, constancy" },
                  { id: "6a-pe-gestalt", title: "Gestalt principles" },
                ],
              },
            ],
          },
          {
            id: "6b",
            code: "6B",
            title: "Making sense of the environment",
            description:
              "Covers critical aspects of cognition including consciousness, cognitive development, problem-solving, intelligence, memory, and language.",
            topics: [
              {
                id: "6b-attention",
                title: "Attention",
                course: "PSY",
                subtopics: [
                  { id: "6b-at-selective", title: "Selective attention" },
                  { id: "6b-at-divided", title: "Divided attention" },
                ],
              },
              {
                id: "6b-cognition",
                title: "Cognition",
                course: "PSY",
                subtopics: [
                  { id: "6b-co-information", title: "Information-processing model" },
                  { id: "6b-co-development", title: "Cognitive development: Piaget's stages, late adulthood, culture" },
                  { id: "6b-co-biological", title: "Biological factors that affect cognition" },
                  { id: "6b-co-problem", title: "Problem-solving and decision-making" },
                  { id: "6b-co-intelligence", title: "Intellectual functioning: theories, heredity, environment" },
                ],
              },
              {
                id: "6b-consciousness",
                title: "Consciousness",
                course: "PSY",
                subtopics: [
                  { id: "6b-cs-states", title: "States of consciousness: alertness, sleep, hypnosis" },
                  { id: "6b-cs-drugs", title: "Consciousness-altering drugs and addiction" },
                ],
              },
              {
                id: "6b-memory",
                title: "Memory",
                course: "PSY",
                subtopics: [
                  { id: "6b-me-encoding", title: "Encoding: process and aids" },
                  { id: "6b-me-storage", title: "Storage: sensory, working, long-term" },
                  { id: "6b-me-retrieval", title: "Retrieval: recall, recognition, cues, emotion" },
                  { id: "6b-me-forgetting", title: "Forgetting: aging, dysfunctions, decay, interference" },
                  { id: "6b-me-synaptic", title: "Synaptic connections: neural plasticity, long-term potentiation" },
                ],
              },
              {
                id: "6b-language",
                title: "Language",
                course: "PSY",
                subtopics: [
                  { id: "6b-la-theories", title: "Theories of language development" },
                  { id: "6b-la-influence", title: "Influence of language on cognition" },
                  { id: "6b-la-brain", title: "Brain areas that control language and speech" },
                ],
              },
            ],
          },
          {
            id: "6c",
            code: "6C",
            title: "Responding to the world",
            description:
              "Covers the basic components and theories of emotion and stress.",
            topics: [
              {
                id: "6c-emotion",
                title: "Emotion",
                course: "PSY",
                subtopics: [
                  { id: "6c-em-components", title: "Three components: cognitive, physiological, behavioral" },
                  { id: "6c-em-universal", title: "Universal emotions" },
                  { id: "6c-em-adaptive", title: "Adaptive role of emotion" },
                  { id: "6c-em-theories", title: "Theories: James-Lange, Cannon-Bard, Schachter-Singer" },
                  { id: "6c-em-biological", title: "Biological processes in perceiving emotion" },
                ],
              },
              {
                id: "6c-stress",
                title: "Stress",
                course: "PSY",
                subtopics: [
                  { id: "6c-st-nature", title: "The nature of stress: appraisal, types of stressors" },
                  { id: "6c-st-outcomes", title: "Stress outcomes: physiological, emotional, behavioral" },
                  { id: "6c-st-managing", title: "Managing stress" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "fc7",
        number: 7,
        title:
          "Biological, psychological, and sociocultural factors influence behavior and behavior change.",
        description:
          "A full understanding of human behavior requires knowledge of the interplay between psychological, sociocultural, and biological factors.",
        categories: [
          {
            id: "7a",
            code: "7A",
            title: "Individual influences on behavior",
            description:
              "Covers biological bases of behavior, personality, psychological disorders, motivation, and attitudes.",
            topics: [
              {
                id: "7a-biological",
                title: "Biological Bases of Behavior",
                course: "PSY, BIO",
                subtopics: [
                  { id: "7a-bb-nervous", title: "The nervous system: neurons, neurotransmitters, peripheral and central" },
                  { id: "7a-bb-brain", title: "The brain: forebrain, midbrain, hindbrain, lateralization" },
                  { id: "7a-bb-spinal", title: "The spinal cord" },
                  { id: "7a-bb-neuronal", title: "Neuronal communication and influence on behavior" },
                  { id: "7a-bb-endocrine", title: "The endocrine system and effects on behavior" },
                  { id: "7a-bb-genetics", title: "Behavioral genetics: genes, temperament, heredity" },
                  { id: "7a-bb-development", title: "Human physiological development" },
                ],
              },
              {
                id: "7a-personality",
                title: "Personality",
                course: "PSY",
                subtopics: [
                  { id: "7a-pe-theories", title: "Theories: psychoanalytic, humanistic, trait, social cognitive, biological, behaviorist" },
                  { id: "7a-pe-situational", title: "Situational approach to explaining behavior" },
                ],
              },
              {
                id: "7a-disorders",
                title: "Psychological Disorders",
                course: "PSY",
                subtopics: [
                  { id: "7a-pd-understanding", title: "Understanding: biomedical vs. biopsychosocial approaches" },
                  { id: "7a-pd-types", title: "Types: anxiety, OCD, trauma, somatic, bipolar, depressive, schizophrenia, dissociative, personality" },
                  { id: "7a-pd-biological", title: "Biological bases of nervous system disorders" },
                ],
              },
              {
                id: "7a-motivation",
                title: "Motivation",
                course: "PSY",
                subtopics: [
                  { id: "7a-mo-factors", title: "Factors: instinct, arousal, drives, needs" },
                  { id: "7a-mo-theories", title: "Theories: drive reduction, incentive, cognitive, need-based" },
                  { id: "7a-mo-biological", title: "Biological and sociocultural motivators" },
                ],
              },
              {
                id: "7a-attitudes",
                title: "Attitudes",
                course: "PSY",
                subtopics: [
                  { id: "7a-at-components", title: "Components: cognitive, affective, behavioral" },
                  { id: "7a-at-link", title: "The link between attitudes and behavior" },
                ],
              },
            ],
          },
          {
            id: "7b",
            code: "7B",
            title: "Social processes that influence human behavior",
            description:
              "Covers how the presence of others, groups, social norms, and socialization affect behavior.",
            topics: [
              {
                id: "7b-presence",
                title: "How the Presence of Others Affects Individual Behavior",
                course: "PSY",
                subtopics: [
                  { id: "7b-pr-facilitation", title: "Social facilitation" },
                  { id: "7b-pr-deindividuation", title: "Deindividuation" },
                  { id: "7b-pr-bystander", title: "Bystander effect" },
                  { id: "7b-pr-loafing", title: "Social loafing" },
                  { id: "7b-pr-control", title: "Social control" },
                  { id: "7b-pr-conformity", title: "Peer pressure, conformity, obedience" },
                ],
              },
              {
                id: "7b-group",
                title: "Group Decision-Making Processes",
                course: "PSY, SOC",
                subtopics: [
                  { id: "7b-gd-polarization", title: "Group polarization" },
                  { id: "7b-gd-groupthink", title: "Groupthink" },
                ],
              },
              {
                id: "7b-normative",
                title: "Normative and Nonnormative Behavior",
                course: "SOC",
                subtopics: [
                  { id: "7b-no-norms", title: "Social norms: sanctions, folkways, mores, taboos, anomie" },
                  { id: "7b-no-deviance", title: "Deviance: differential association, labeling, strain theory" },
                  { id: "7b-no-collective", title: "Aspects of collective behavior" },
                ],
              },
              {
                id: "7b-socialization",
                title: "Socialization",
                course: "PSY, SOC",
                subtopics: [
                  { id: "7b-so-agents", title: "Agents of socialization: family, mass media, peers, workplace" },
                ],
              },
            ],
          },
          {
            id: "7c",
            code: "7C",
            title: "Attitude and behavior change",
            description:
              "Covers learning and theories of attitude and behavior change.",
            topics: [
              {
                id: "7c-habituation",
                title: "Habituation and Dishabituation",
                course: "PSY",
                subtopics: [],
              },
              {
                id: "7c-associative",
                title: "Associative Learning",
                course: "PSY",
                subtopics: [
                  { id: "7c-al-classical", title: "Classical conditioning: stimuli, responses, acquisition, extinction" },
                  { id: "7c-al-operant", title: "Operant conditioning: shaping, reinforcement, punishment" },
                  { id: "7c-al-cognitive", title: "The role of cognitive processes" },
                  { id: "7c-al-biological", title: "Biological processes that affect learning" },
                ],
              },
              {
                id: "7c-observational",
                title: "Observational Learning",
                course: "PSY",
                subtopics: [
                  { id: "7c-ob-modeling", title: "Modeling" },
                  { id: "7c-ob-biological", title: "Biological processes: mirror neurons, vicarious emotions" },
                  { id: "7c-ob-applications", title: "Applications to individual behavior" },
                ],
              },
              {
                id: "7c-theories",
                title: "Theories of Attitude and Behavior Change",
                course: "PSY",
                subtopics: [
                  { id: "7c-th-elaboration", title: "Elaboration likelihood model" },
                  { id: "7c-th-social-cognitive", title: "Social cognitive theory" },
                  { id: "7c-th-factors", title: "Factors that affect attitude change" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "fc8",
        number: 8,
        title:
          "Psychological, sociocultural, and biological factors influence the way we think about ourselves and others, as well as how we interact with others.",
        description:
          "The connection between how people think about themselves and others is complex and affects social interactions.",
        categories: [
          {
            id: "8a",
            code: "8A",
            title: "Self-identity",
            description:
              "Covers self-concept and identity, including self-esteem, self-efficacy, and locus of control.",
            topics: [
              {
                id: "8a-self-concept",
                title: "Self-Concept, Self-Identity, and Social Identity",
                course: "PSY, SOC",
                subtopics: [
                  { id: "8a-sc-role", title: "Role of self-esteem, self-efficacy, and locus of control" },
                  { id: "8a-sc-types", title: "Different types of identities" },
                ],
              },
              {
                id: "8a-formation",
                title: "Formation of Identity",
                course: "PSY, SOC",
                subtopics: [
                  { id: "8a-fo-theories", title: "Theories of identity development" },
                  { id: "8a-fo-social", title: "Influence of social factors" },
                  { id: "8a-fo-culture", title: "Influence of culture and socialization" },
                ],
              },
            ],
          },
          {
            id: "8b",
            code: "8B",
            title: "Social thinking",
            description:
              "Covers attitudes about others, attributions, prejudice, stereotypes, and stigma.",
            topics: [
              {
                id: "8b-attributing",
                title: "Attributing Behavior to Persons or Situations",
                course: "PSY",
                subtopics: [
                  { id: "8b-at-processes", title: "Attributional processes: fundamental attribution error, culture" },
                  { id: "8b-at-self", title: "How self-perceptions shape our perceptions of others" },
                  { id: "8b-at-environment", title: "How perceptions of the environment shape our perceptions" },
                ],
              },
              {
                id: "8b-prejudice",
                title: "Prejudice and Bias",
                course: "PSY, SOC",
                subtopics: [
                  { id: "8b-pb-processes", title: "Processes that contribute to prejudice" },
                  { id: "8b-pb-stereotypes", title: "Stereotypes" },
                  { id: "8b-pb-stigma", title: "Stigma" },
                  { id: "8b-pb-ethnocentrism", title: "Ethnocentrism vs. cultural relativism" },
                ],
              },
              {
                id: "8b-stereotype-processes",
                title: "Processes Related to Stereotypes",
                course: "PSY",
                subtopics: [
                  { id: "8b-sp-prophecy", title: "Self-fulfilling prophecy" },
                  { id: "8b-sp-threat", title: "Stereotype threat" },
                ],
              },
            ],
          },
          {
            id: "8c",
            code: "8C",
            title: "Social interactions",
            description:
              "Covers mechanisms of self-presentation and social interaction.",
            topics: [
              {
                id: "8c-elements",
                title: "Elements of Social Interaction",
                course: "PSY, SOC",
                subtopics: [
                  { id: "8c-el-status", title: "Status: achieved, ascribed" },
                  { id: "8c-el-role", title: "Role: conflict, strain, exit" },
                  { id: "8c-el-groups", title: "Groups: primary, secondary, in-group, out-group" },
                  { id: "8c-el-networks", title: "Networks" },
                  { id: "8c-el-organizations", title: "Organizations: formal organization, bureaucracy" },
                ],
              },
              {
                id: "8c-self-presentation",
                title: "Self-Presentation and Interacting With Others",
                course: "PSY, SOC",
                subtopics: [
                  { id: "8c-sp-emotion", title: "Expressing and detecting emotion" },
                  { id: "8c-sp-presentation", title: "Presentation of self: impression management" },
                  { id: "8c-sp-communication", title: "Verbal and nonverbal communication" },
                  { id: "8c-sp-animal", title: "Animal signals and communication" },
                ],
              },
              {
                id: "8c-social-behavior",
                title: "Social Behavior",
                course: "PSY",
                subtopics: [
                  { id: "8c-sb-attraction", title: "Attraction" },
                  { id: "8c-sb-aggression", title: "Aggression" },
                  { id: "8c-sb-attachment", title: "Attachment" },
                  { id: "8c-sb-altruism", title: "Altruism" },
                  { id: "8c-sb-support", title: "Social support" },
                  { id: "8c-sb-biological", title: "Biological explanations of social behavior in animals" },
                ],
              },
              {
                id: "8c-discrimination",
                title: "Discrimination",
                course: "PSY, SOC",
                subtopics: [
                  { id: "8c-di-individual", title: "Individual vs. institutional discrimination" },
                  { id: "8c-di-prejudice", title: "The relationship between prejudice and discrimination" },
                  { id: "8c-di-power", title: "How power, prestige, and class facilitate discrimination" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "fc9",
        number: 9,
        title: "Cultural and social differences influence well-being.",
        description:
          "Social structure and demographic factors influence people's health and well-being.",
        categories: [
          {
            id: "9a",
            code: "9A",
            title: "Understanding social structure",
            description:
              "Covers theoretical approaches, social institutions, and culture.",
            topics: [
              {
                id: "9a-theoretical",
                title: "Theoretical Approaches",
                course: "SOC",
                subtopics: [
                  { id: "9a-th-micro", title: "Microsociology vs. macrosociology" },
                  { id: "9a-th-functionalism", title: "Functionalism" },
                  { id: "9a-th-conflict", title: "Conflict theory" },
                  { id: "9a-th-symbolic", title: "Symbolic interactionism" },
                  { id: "9a-th-constructionism", title: "Social constructionism" },
                  { id: "9a-th-exchange", title: "Exchange-rational choice" },
                  { id: "9a-th-feminist", title: "Feminist theory" },
                ],
              },
              {
                id: "9a-institutions",
                title: "Social Institutions",
                course: "SOC",
                subtopics: [
                  { id: "9a-si-education", title: "Education: hidden curriculum, teacher expectancy, segregation" },
                  { id: "9a-si-family", title: "Family: kinship, diversity, marriage, divorce, violence" },
                  { id: "9a-si-religion", title: "Religion: religiosity, organizations, social change" },
                  { id: "9a-si-government", title: "Government and economy: power, authority, political systems" },
                  { id: "9a-si-health", title: "Health and medicine: medicalization, sick role, delivery, epidemiology" },
                ],
              },
              {
                id: "9a-culture",
                title: "Culture",
                course: "PSY, SOC",
                subtopics: [
                  { id: "9a-cu-elements", title: "Elements of culture: beliefs, language, rituals, symbols, values" },
                  { id: "9a-cu-material", title: "Material vs. symbolic culture" },
                  { id: "9a-cu-lag", title: "Culture lag, culture shock" },
                  { id: "9a-cu-assimilation", title: "Assimilation, multiculturalism" },
                  { id: "9a-cu-subcultures", title: "Subcultures and countercultures" },
                  { id: "9a-cu-media", title: "Mass media and popular culture" },
                  { id: "9a-cu-evolution", title: "Evolution and human culture" },
                ],
              },
            ],
          },
          {
            id: "9b",
            code: "9B",
            title: "Demographic characteristics and processes",
            description:
              "Covers important demographic variables and concepts related to demographic shifts and social change.",
            topics: [
              {
                id: "9b-demographic",
                title: "Demographic Structure of Society",
                course: "PSY, SOC",
                subtopics: [
                  { id: "9b-ds-age", title: "Age: aging, life course, age cohorts" },
                  { id: "9b-ds-gender", title: "Gender: sex vs. gender, social construction, segregation" },
                  { id: "9b-ds-race", title: "Race and ethnicity: social construction, racialization" },
                  { id: "9b-ds-immigration", title: "Immigration status: patterns, intersections" },
                  { id: "9b-ds-orientation", title: "Sexual orientation" },
                ],
              },
              {
                id: "9b-shifts",
                title: "Demographic Shifts and Social Change",
                course: "SOC",
                subtopics: [
                  { id: "9b-sh-theories", title: "Theories of demographic change" },
                  { id: "9b-sh-population", title: "Population growth and decline" },
                  { id: "9b-sh-fertility", title: "Fertility, migration, and mortality" },
                  { id: "9b-sh-movements", title: "Social movements" },
                  { id: "9b-sh-globalization", title: "Globalization" },
                  { id: "9b-sh-urbanization", title: "Urbanization" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "fc10",
        number: 10,
        title:
          "Social stratification and access to resources influence well-being.",
        description:
          "Social stratification and inequality affect all human societies and shape the lives of all individuals.",
        categories: [
          {
            id: "10a",
            code: "10A",
            title: "Social inequality",
            description:
              "Covers spatial inequality, social class, and health disparities.",
            topics: [
              {
                id: "10a-spatial",
                title: "Spatial Inequality",
                course: "SOC",
                subtopics: [
                  { id: "10a-sp-segregation", title: "Residential segregation" },
                  { id: "10a-sp-safety", title: "Neighborhood safety and violence" },
                  { id: "10a-sp-environmental", title: "Environmental justice" },
                ],
              },
              {
                id: "10a-social-class",
                title: "Social Class",
                course: "SOC",
                subtopics: [
                  { id: "10a-sc-stratification", title: "Aspects of social stratification" },
                  { id: "10a-sc-mobility", title: "Patterns of social mobility" },
                  { id: "10a-sc-poverty", title: "Poverty: relative and absolute, social exclusion" },
                ],
              },
              {
                id: "10a-health-disparities",
                title: "Health Disparities",
                course: "SOC",
                subtopics: [
                  { id: "10a-hd-class", title: "Class, gender, and race inequalities in health" },
                ],
              },
              {
                id: "10a-healthcare-disparities",
                title: "Health Care Disparities",
                course: "SOC",
                subtopics: [
                  { id: "10a-hcd-class", title: "Class, gender, and race inequalities in health care" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cars",
    title: "Critical Analysis and Reasoning Skills",
    shortTitle: "CARS",
    color: "#dc2626",
    description:
      "Tests your ability to comprehend, analyze, and reason about passages from the social sciences and humanities. Everything you need to answer questions is in the passages themselves. No additional science knowledge is required.",
    questionCount: 53,
    timeMinutes: 90,
    disciplines: [
      { name: "Humanities", percentage: 50 },
      { name: "Social Sciences", percentage: 50 },
    ],
    foundationalConcepts: [
      {
        id: "cars-skills",
        number: 0,
        title: "Critical Analysis and Reasoning Skills",
        description:
          "The section assesses three broad critical analysis and reasoning skills through passages from humanities and social sciences.",
        categories: [
          {
            id: "cars-comprehension",
            code: "CARS-1",
            title: "Foundations of Comprehension",
            description:
              "Understanding the basic components of the text and inferring meaning from immediate context. About 30% of questions.",
            topics: [
              {
                id: "cars-basic",
                title: "Understanding the Basic Components of the Text",
                subtopics: [
                  { id: "cars-ba-overview", title: "General overview of the passage" },
                  { id: "cars-ba-literal", title: "Literal meaning of words and phrases" },
                  { id: "cars-ba-thesis", title: "Author's thesis and main point" },
                  { id: "cars-ba-purpose", title: "Purpose of particular sentences" },
                ],
              },
              {
                id: "cars-inferring",
                title: "Inferring Meaning or Intent From Immediate Sentence Context",
                subtopics: [
                  { id: "cars-in-interpret", title: "Interpreting meaning of words, expressions, or intent" },
                  { id: "cars-in-rhetorical", title: "Rhetorical devices and word choice" },
                  { id: "cars-in-structure", title: "Text structure: cause-and-effect, chronological, point-counterpoint" },
                  { id: "cars-in-tone", title: "Author's tone: humorous, authoritative, satirical" },
                ],
              },
            ],
          },
          {
            id: "cars-reasoning-within",
            code: "CARS-2",
            title: "Reasoning Within the Text",
            description:
              "Integrating distant components of the text to determine the author's message and evaluating arguments. About 30% of questions.",
            topics: [
              {
                id: "cars-integrating",
                title: "Integrating Distant Components of the Text",
                subtopics: [
                  { id: "cars-it-message", title: "Determining author's message, purpose, position" },
                  { id: "cars-it-beliefs", title: "Inferring beliefs, assumptions, detecting bias" },
                  { id: "cars-it-contradictions", title: "Identifying paradoxes, contradictions, inconsistencies" },
                  { id: "cars-it-perspectives", title: "Recognizing different points of view" },
                ],
              },
              {
                id: "cars-evaluating",
                title: "Recognizing and Evaluating Arguments",
                subtopics: [
                  { id: "cars-ev-logic", title: "Logic and plausibility of arguments" },
                  { id: "cars-ev-evidence", title: "Presence or absence of evidence" },
                  { id: "cars-ev-credibility", title: "Credibility of sources" },
                  { id: "cars-ev-bias", title: "Identifying bias in arguments" },
                ],
              },
            ],
          },
          {
            id: "cars-reasoning-beyond",
            code: "CARS-3",
            title: "Reasoning Beyond the Text",
            description:
              "Applying ideas to new contexts and assessing the impact of new information. About 40% of questions.",
            topics: [
              {
                id: "cars-applying",
                title: "Applying or Extrapolating Ideas to New Contexts",
                subtopics: [
                  { id: "cars-ap-extending", title: "Extending information to other areas or fields" },
                  { id: "cars-ap-response", title: "Determining author's likely response to hypotheticals" },
                  { id: "cars-ap-analogies", title: "Identifying analogous relationships" },
                ],
              },
              {
                id: "cars-incorporating",
                title: "Assessing Impact of Incorporating New Information",
                subtopics: [
                  { id: "cars-ic-support", title: "Does new information support or contradict the passage?" },
                  { id: "cars-ic-modifications", title: "What modifications would accommodate new information?" },
                  { id: "cars-ic-least-change", title: "Which new fact would least alter the central thesis?" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getAllTopicIds(): string[] {
  const ids: string[] = [];
  for (const section of mcatSections) {
    for (const fc of section.foundationalConcepts) {
      for (const cat of fc.categories) {
        for (const topic of cat.topics) {
          ids.push(topic.id);
          for (const sub of topic.subtopics) {
            ids.push(sub.id);
          }
        }
      }
    }
  }
  return ids;
}

export function countTopics(section: ExamSection): number {
  let count = 0;
  for (const fc of section.foundationalConcepts) {
    for (const cat of fc.categories) {
      count += cat.topics.length;
    }
  }
  return count;
}

export function countSubtopics(section: ExamSection): number {
  let count = 0;
  for (const fc of section.foundationalConcepts) {
    for (const cat of fc.categories) {
      for (const topic of cat.topics) {
        count += topic.subtopics.length;
      }
    }
  }
  return count;
}
