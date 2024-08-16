---
title: "PromptScore: Evaluating Large Language Model Performance with a Comprehensive Scoring System"
collection: projects
category: 
permalink: /projects/2024-05-05-prompt-score
excerpt: 'A novel system to evaluate prompt specificity and its impact on Large Language Model performance.'
date: 2024-05-05
# venue: 'Journal 1'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'http://raahulsaxena.github.io/files/cs685-report.pdf'
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---


**Authors:** Amritansh Mishra, Rahul Saxena, Manish Ranjan Karna, Manas Wadhwa <br>
**Institution:** UMass Amherst <br>
[GitHub Link](https://github.com/raahulsaxena/prompt_score)


## Abstract

In this project, we introduce **PromptScore**, a novel mechanism designed to evaluate the specificity of prompts used in interacting with Large Language Models (LLMs) like GPT-4. Our goal is to create a standardized scoring system that assesses the effectiveness of prompts based on metrics such as coherence, clarity, and ambiguity. This scoring system, validated by human annotators, aims to provide a deeper understanding of LLM capabilities and performance, particularly in handling specific and complex prompts.

## Problem Statement

The effectiveness of prompts significantly impacts the performance of LLMs. However, the lack of a standardized prompt evaluation metric poses challenges in optimizing prompt design for specific use cases. Our project addresses this gap by developing a prompt scoring system that evaluates prompt specificity and its impact on LLM performance. We explored two approaches: fine-tuning the LLaMA model using the QLoRA technique and leveraging GPT-4's few-shot prompting strategy to generate prompt scores.

## Methodology

### Dataset Creation

We curated a dataset comprising 800 prompts, each annotated with scores based on four criteria:
- **Number of Constraints:** The total number of constraints in the prompt.
- **Constraint Complexity:** The complexity of each individual constraint.
- **Clarity:** The clarity and understandability of the prompt.
- **Prompt Complexity:** The overall complexity of the prompt's storyline or structure.

### Model Fine-Tuning

1. **LLaMA Fine-Tuning:**  
   We fine-tuned the LLaMA model using the QLoRA approach on our custom dataset. Despite optimizing hyperparameters such as learning rate and batch size, LLaMA's performance on prompt evaluation remained suboptimal compared to GPT-4.

2. **GPT-4 Few-Shot Learning:**  
   We used GPT-4 in a few-shot learning configuration to evaluate prompts. GPT-4 outperformed LLaMA, demonstrating a better understanding of the evaluation criteria and generating more coherent and high-quality prompt evaluations.

### Evaluation Metrics

To evaluate the generated stories, we instructed GPT-4 to assess each story based on the following criteria:
- **Coherence:** Logical consistency and narrative flow.
- **Constraints Satisfied:** Adherence to the specific constraints outlined in the prompt.
- **Fluency:** Readability and linguistic quality.

## Results

Our experiments revealed that GPT-4's few-shot learning approach significantly outperformed the fine-tuned LLaMA model in generating accurate prompt scores. The results indicated that as prompt specificity increases, the performance of LLMs deteriorates, particularly in maintaining coherence and satisfying constraints.

### Key Findings:
- **LLaMA Model:** Struggled with nuanced prompt evaluation, particularly in coherence and constraints.
- **GPT-4:** Demonstrated superior performance in evaluating complex and specific prompts, validating the effectiveness of the PromptScore system.

## Error Analysis

We identified a limitation in the model's ability to score highly specific prompts accurately. For instance, prompts with intricate constraints tended to receive lower scores than expected, suggesting that our model may require further fine-tuning or a larger, more diverse dataset to improve accuracy.

## Conclusion

Our PromptScore system offers a standardized approach to evaluating prompt specificity and its impact on LLM performance. The findings suggest that GPT-4 is better equipped to handle complex prompts, making it a more reliable model for generating and evaluating specific language tasks. Future work will focus on expanding the dataset, refining the scoring system, and exploring alternative models to enhance prompt evaluation accuracy.

## Future Work

- **Expand the Evaluation Dataset:** Increase the number of prompts with varying specificity to calculate more robust performance metrics.
- **Explore Alternative Scoring Methods:** Investigate other LLMs or continuous scoring systems for more accurate and nuanced evaluations.
- **Apply PromptScore to Other Domains:** Generalize the scoring system to assess prompts across different domains and tasks.
