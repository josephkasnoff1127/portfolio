import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import faceInfoImage from "@/public/faceInfo.png";
import lungCancerImage from "@/public/lungCancer.png";
import titleRecommendationImage from "@/public/titleRecommendation.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";

import lc_logo from "@/public/langchain_logo.png";
import pc_logo from "@/public/pc_logo.png";
import ks_logo from "@/public/keras_logo.png";
import np_logo from "@/public/numpy_logo.png";
import pd_logo from "@/public/pandas_logo.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior AI/ML Engineer",
    location: "SoluLab, Remote - CA, US",
    description:
      "Implemented and deployed a real-time chatbot with STT and TTS integration, and fine-tuned an LLM to generate Java code from natural language queries. Developed a multi-modal feature extractor for semantic search, optimized a TTS model reducing its size by 30% with minimal performance loss, and trained a custom chatbot using RLHF for company-specific introductions.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - June 2024",
  },
  {
    title: "Junior ML Engineer",
    location: "Gridspace, Remote - CA, US",
    description:
      "Developed models for automatic image captioning with a 73 BLEU-1 score and enhanced low-quality image resolution using deep learning techniques. Leveraged self-supervised learning for pre-training large language models, achieving a 56 BLEU-1 score in neural machine translation, and contributed to a speech recognition system with a 6.5% WER in real-time performance.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2020 - Apr 2023",
  },
  {
    title: "Machine Learning Developer",
    location: "Kimera Systems, OR, US",
    description:
      "Enhanced image segmentation for cancer detection to 78% accuracy and achieved 93% accuracy in face recognition with advanced liveness detection. Engineered a recommendation system that boosted e-commerce sales by 35% and developed an anomaly detection system identifying 95% of abnormal activities without expert intervention.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2018 - Aug 2020",
  },
] as const;

export const projectsData = [
  {
    title: "BioInfo from Face",
    description:
      "I acquired several Biometrical & Emotional information from face  like age, gender, emotion and race. You can experience it with webcam or fixed image. This implementation allows recognition of multiple faces and the registration of new users for facial recognition.",
    tags: ["JavaScript", "React", "Express.js", "AWS"],
    icons: [
      "skill-icons:python-dark",
      "skill-icons:tensorflow-dark",
      "logos:aws",
    ],
    imageUrl: faceInfoImage,
    githubLink: "https://github.com/josephkasnoff1127/BioInfoFromFace",
    demoLink: "https://github.com/josephkasnoff1127/BioInfoFromFace",
  },
  {
    title: "Lung Cancer Detection",
    description:
      "I enhanced image segmentation performance for cancer detection in X-ray images to 78% accuracy by utilizing U-net and smooth L1 loss. I implemented this in PyTorch Framework.",
    tags: ["Python", "PyTorch", "AWS"],
    icons: ["skill-icons:python-dark", "skill-icons:pytorch-dark", "logos:aws"],
    imageUrl: lungCancerImage,
    githubLink: "https://github.com/ben04rogers/ozdevs-v2",
  },
  {
    title: "Neural Machine Translation",
    description:
      "Neural Machine Translation using LSTMs and Attention mechanism. Two approaches were implemented, models, one without out attention using repeat vector, and the other using encoder decoder architecture and attention mechanism.",
    tags: ["Python", "PyTorch", "Keras", "AWS"],
    icons: [
      "skill-icons:python-dark",
      "skill-icons:tensorflow-dark",
      "skill-icons:pytorch-dark",
      "logos:aws",
    ],
    imageUrl: titleRecommendationImage,
    githubLink: "https://github.com/ben04rogers/organisation-asset-trading",
  },
  {
    title: "Academic Paper Title Recommendation",
    description:
      "Supervised text summarization (title generation/recommendation) based on academic paper abstracts, with Seq2Seq LSTM and T5. In this project, our aim is to create a supervised summarization model that generates titles from academic papers (their abstracts). Paper titles are exiciting section of papers, some of them relevent with paper content, some of them are not (e.g Attention Is All You Need). Titles motivate people to read the papers, have a big role on accepted submission to conferences. Maybe it can help people write more creative titles.",
    tags: ["Python", "Flask", "Bootstrap", "SQLite"],
    icons: ["skill-icons:python-dark", "skill-icons:pytorch-dark", "logos:aws"],
    imageUrl: titleRecommendationImage,
    githubLink:
      "https://github.com/josephkasnoff1127/Academic-Paper-Title-Recommendation",
  },
  {
    title: "LLM using RLHF(Reinforcement Learning from Human Feedback",
    description:
      "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
    tags: ["PyTorch"],
    icons: ["skill-icons:pytorch-dark"],
    imageUrl: taskManagerImg,
    githubLink: "https://github.com/josephkasnoff1127/LLM-RLHF-Tuning",
  },
] as const;

export const skillsData = [
  {
    name: "Python",
    icon: "skill-icons:python-dark",
    img: null,
  },
  {
    name: "C++",
    icon: "skill-icons:cpp",
    img: null,
  },
  {
    name: "TensorFlow",
    icon: "skill-icons:tensorflow-dark",
    img: null,
  },
  {
    name: "PyTorch",
    icon: "skill-icons:pytorch-dark",
    img: null,
  },
  {
    name: "Keras",
    img: ks_logo,
  },
  {
    name: "LangChain",
    img: lc_logo,
  },
  {
    name: "PineCone",
    img: pc_logo,
  },
  {
    name: "Numpy",
    img: np_logo,
  },
  {
    name: "Pandas",
    img: pd_logo,
  },
  {
    name: "Django",
    icon: "skill-icons:django",
    img: null,
  },
  {
    name: "Flask",
    icon: "skill-icons:flask-dark",
    img: null,
  },
  {
    name: "OpenCV",
    icon: "skill-icons:opencv-dark",
    img: null,
  },
  {
    name: "AWS",
    icon: "skill-icons:aws-dark",
    img: null,
  },
] as const;
