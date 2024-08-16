---
title: "Camouflaged Object Detection in Limited Data Setting"
collection: projects
category: 
permalink: /projects/2024-05-05-camouflaged-detection
excerpt: 'Our project has explored ways to improve camouflaged object segmentation performance in a limited data setting.'
date: 2024-05-05
# venue: 'Journal 1'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'http://raahulsaxena.github.io/files/cs670-report.pdf'
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---

**Authors:** Vinitra Muralikrishnan, Rahul Saxena, Mustafa Chasmai  <br>
**Institution:** UMass Amherst <br>
[GitHub Link](https://github.com/raahulsaxena/advanced-camouflage-detection)

## Abstract

Camouflaged Object Detection (COD) is a challenging task due to the inherent difficulty in distinguishing objects that intentionally blend into their surroundings. This challenge is compounded by the limited size and diversity of existing COD datasets. Our project explores various methods to enhance camouflaged object segmentation, especially in limited data settings, using techniques such as data augmentation, synthetic data generation, and weakly supervised learning. We aim to improve upon existing benchmarks and catalyze future research in this domain.

## Introduction

Detecting camouflaged objects is inherently challenging for both humans and machine learning models. These objects, by design, blend seamlessly with their environment, making them difficult to identify. Traditional segmentation models, which excel at detecting conspicuous objects, struggle with camouflaged objects due to their reliance on visual differences from the background.

This project aims to explore methods to enhance camouflaged object segmentation by overcoming the limitations posed by small, less diverse datasets. We focus on augmenting the training data through style transfer, generating synthetic data, and exploring weakly supervised segmentation approaches. These methods are evaluated against the Segment Anything Model (SAM), a state-of-the-art model for general object segmentation.

## Background

Camouflaged Object Detection (COD) draws inspiration from the natural world, where many species have evolved sophisticated camouflage techniques. This ability to blend in is achieved through pigments or physical structures that manipulate light, making the species difficult to detect. Translating these biological insights into machine learning involves creating models that can recognize these subtle cues in images.

In contrast to common object detection datasets like COCO, which contain hundreds of thousands of labeled images, COD datasets are relatively small. This scarcity of data presents a significant challenge for training effective segmentation models. Our approach leverages data augmentation and synthetic data generation to mitigate this challenge and improve model robustness.

## Related Work

Research in COD is still nascent compared to other forms of object detection. Early efforts, such as the CAMO and COD10K datasets, laid the foundation for this field by providing the first dedicated datasets for camouflaged object detection. SINet, a model designed specifically for COD, mimics the human visual system's search and identification process, offering a robust baseline for our experiments.

## SINet Backbone and ResNet-18

We built our approach on a modified SINet architecture, which traditionally uses a ResNet-50 backbone. To reduce computational demands without sacrificing performance, we replaced ResNet-50 with ResNet-18. This adjustment maintained effective object detection capabilities while improving efficiency, particularly in scenarios with limited computational resources.

### Key Components of SINet:

1. **Search Module (SM):** Mimics the initial phase of a predator's hunt, highlighting potential regions where camouflaged objects might be located.
2. **Identification Module (IM):** Refines the detection process, ensuring accurate segmentation by integrating multi-level features processed from the SM.

## Proposed Methods

### Style-Transfer as Augmentation

To introduce more diversity into the training data, we developed a data augmentation pipeline using Neural Style Transfer. This technique mimics natural camouflage by blending objects into different backgrounds and textures. For instance, an owl camouflaged in rocky terrain could be transformed into an owl camouflaged on a beach. This method helps the model learn to detect camouflaged objects in varied environments.

### Weakly Supervised Segmentation

Given the difficulty of obtaining annotated data for camouflaged objects, we explored weakly supervised methods. We trained a binary classifier to predict whether an image contains a camouflaged object, achieving 90% accuracy. While this approach doesn't match the performance of fully supervised methods, it provides valuable insights into what the model "sees" in these challenging images.

### Synthetic Data Generation

We used generative models to create additional training images, simulating camouflaged objects in different environments. By varying the color and texture of both the object and its surroundings, we generated a diverse set of images to supplement the original dataset. This synthetic data bridges the gap between camouflaged and generic image segmentation tasks.

## Experiments, Results, and Benchmark

### Dataset Description

We used three benchmark datasets for our experiments: CAMO, COD10K, and CHAMELEON. These datasets contain a variety of camouflaged objects, from animals to artificially camouflaged objects like soldiers. Our experiments focused on semantic segmentation tasks using the corresponding labels in COD10K.

### Evaluation Metrics

We evaluated our models using the following metrics:

- **Intersection Over Union (IOU):** Measures the overlap between predicted and true segmentation masks.
- **Pixel Accuracy (P-ACC):** Calculates the accuracy of correctly classified pixels.
- **Dice Score:** Gauges the similarity between the predicted mask and the ground truth, particularly useful for datasets with class imbalances.

### Analysis of Results

Our experiments demonstrated that incorporating style transfer and synthetic data significantly improved model performance. For example, using style-transfer augmented images led to a 4.1% improvement in IOU, while synthetic data improved IOU by 7.8%. These methods also narrowed the performance gap between SINet and the SAM model, highlighting the effectiveness of our approach.

## Conclusions

Our project shows that style transfer and synthetic data are potent strategies for enhancing camouflaged object segmentation. These methods introduce variability and complexity into the training process, enabling models to perform better in limited data settings. Future work could extend this research by applying these techniques to broader datasets, further improving the model's ability to detect camouflaged objects in diverse scenarios.
