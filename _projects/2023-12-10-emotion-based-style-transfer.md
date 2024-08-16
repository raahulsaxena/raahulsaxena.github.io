---
title: "Emotion-Based Style Transfer: Enhancing Image Aesthetics with Neural Networks"
collection: projects
category: 
permalink: /projects/2023-12-10-emotion-based-style-transfer
excerpt: 'Exploring the integration of emotion recognition with neural style transfer to create visually and emotionally enriched images.'
date: 2023-12-10
# venue: 'Journal 1'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'http://raahulsaxena.github.io/files/cs682-report.pdf'
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---


**Authors:** Dishant Padalia, Rahul Saxena <br>
**Institution:** UMass Amherst <br>
[GitHub Link](https://github.com/raahulsaxena/emotion-based-style-transfer)

## Abstract

In this project, we introduce an innovative approach that integrates emotion recognition with neural style transfer in image processing. Utilizing convolutional neural networks (CNNs), we dynamically apply artistic styles to images based on their emotional context. By leveraging a 21-layer CNN for emotion classification and a specialized neural style transfer model, we demonstrate significant advancements in creating visually and emotionally enriched images. Our experiments on the Expression in-the-Wild (ExpW) dataset reveal the potential of this technique to transform image aesthetics in a contextually relevant manner.

## Introduction

The field of style transfer has evolved significantly since the late 1990s, progressing from basic image processing techniques to sophisticated neural network-based methods. A key milestone was the introduction of neural style transfer by Gatys et al. in 2015, which used CNNs to combine the content of one image with the style of another. Building on these advancements, our project incorporates emotion recognition into the style transfer process, aiming to generate images that are not only visually appealing but also emotionally resonant.

## Related Work

Significant contributions have shaped the field of neural style transfer, starting with Gatys et al.'s pioneering work in 2015. Subsequent research by Johnson et al. introduced perceptual losses for real-time style transfer, addressing computational challenges and improving efficiency. The use of CNNs in emotion recognition has also seen substantial progress, particularly with architectures like VGG, Inception, and ResNet, which have achieved high accuracy in emotion classification tasks.

## Proposed Approach

### System Architecture

Our system architecture involves two primary components: an emotion classification model and a neural style transfer model. The input image is first processed by the emotion classification model, which identifies the dominant emotion. The image is then passed to a style transfer model trained specifically for the detected emotion, resulting in an output image that reflects both the content and the emotional style.

### Classification Model

We developed a 21-layer CNN for emotion classification, including convolutional, pooling, batch normalization, dropout, and fully-connected layers. This model was trained on the ExpW dataset, which contains over 91,000 images labeled with seven basic emotions. Data augmentation was employed to address class imbalance, enhancing the model's ability to generalize across different emotional states.

### Neural Style Transfer

The neural style transfer (NST) model blends the content of an input image with the style of another image. Our NST model comprises an image transformation network and a loss network based on the VGG16 architecture. The image transformation network is a deep residual network that applies artistic styles to the input image, while the loss network calculates the perceptual loss between the content and style images to guide the transformation process.

## Experiments

### Dataset

We used the Expression in-the-Wild (ExpW) dataset, which contains images labeled with emotions such as happy, sad, fear, neutral, surprise, disgust, and angry. The dataset was preprocessed to ensure uniform image dimensions and balanced class distribution through data augmentation.

### Implementation Details

The emotion classification model was trained for 50 epochs using the Adam optimizer, achieving a training accuracy of 96.53% and a test accuracy of 77.51%. The NST models were trained on specific artistic styles corresponding to each emotion, with each model trained for 5 epochs due to computational constraints.

### Evaluation Metrics

For emotion classification, accuracy and loss were the primary metrics. In the style transfer process, the total loss was minimized, calculated as a weighted sum of content loss and style loss, using feature maps extracted from the VGG16 network.

## Results and Discussion

The emotion classification model performed well, achieving high training accuracy. However, test accuracy was affected by the complexity of emotions and variability in the dataset. The neural style transfer models successfully applied emotion-specific styles to images, though some improvements could be made with additional training and more powerful computational resources.

## Conclusion

Our project successfully demonstrated the integration of emotion recognition with neural style transfer, resulting in images that are both aesthetically and emotionally enhanced. Future work will explore the application of multiple styles per image and expand the approach to more complex emotional states.
