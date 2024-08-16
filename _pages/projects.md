---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

<!-- {% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %} -->

Projects
======
* Advanced Camouflaged Object Detection in Limited Data Setting | Python | Computer Vision | April - May 2024
  * Modified the SINet using ResNet-18 to reduce computational load while retaining 90.76% of detection accuracy.
  * Improved pixel accuracy of segmentation masks from 69.19% to 79.22% on COD10K by introducing balanced loss.
  * Implemented data augmentation techniques using style transfer & stable diffusion API to simulate natural camouflage.
  * Tested with 3,000 original, style-transferred, and synthetic images to achieve 11.36% increase in detection precision.

* Prompt Score | Python, PyTorch, Huggingface, Llama | Natural Language Processing | Mar - May 2024
  * Developed a prompt scoring system to evaluate the specificity of prompts used with Large Language Models (LLMs).
  * Fine-tuned the Llama model with QLoRA to achieve a 20% improvement in performance on specificity scoring.
  * Evaluated 3 LLMs (Alpaca, Claude, and Gemma) to find that Claude was 15% better in coherence and constraints.
  * Created and annotated a dataset of 800 prompts, improving prompt scoring model accuracy by 10%.
