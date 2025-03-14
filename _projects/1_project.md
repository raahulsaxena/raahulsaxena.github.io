---
layout: page
title: Emotion based Style Transfer
description: CS 682 course project
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---


<!-- To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    --- -->

<!-- <div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div> -->

<!-- The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %} -->

**Authors:** Rahul Saxena, Dishant Padalia
**Institution:** UMass Amherst
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
