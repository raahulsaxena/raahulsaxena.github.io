---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* M.S. in Computer Science, University of Massachusetts Amherst, 2025 (Expected)
* B.E. in Electrical Engineering, BITS Pilani, 2019

Work experience
======
* May 2020 - July 2023: Software Engineer II (Data Analysis) at Philips
  * Reduced the post release defects by 28% as a verification lead for the Ultrasound Eye Analytics Platform.
  * Developed the translator microservice using Flask to reduce the turnaround time to < 2ms for cached translations.
  * Migrated 3 analytical dashboards from on-prem servers to AWS Cloud, reducing manual deployment efforts by 75%.
  * Improved the reliability of MR Software releases - R11 and R12 by owning the MEBEF Inhouse Dashboard.
  * Achieved an automation rate of 85.7% for a data processing pipeline for the service calls analytics using Talend.

* July, 2019 - April, 2020: Software Engineer I at Philips
  * Upskilled in Erlang and resolved the bugs in the data manager module of PerformanceBridge developer platform.
  * Developed a bulk import feature for the service tools application by utilizing Ruby on Rails framework.
  * Team: Enterprise Operational Informatics (formerly known as Radiology Solutions)

* July, 2018 - Dec, 2018: Software Engineer Intern at PayPal
  * Developed an auto-remediation framework called Optimus to resolve the failures dealt by the Core Data Operations.
  * Created a full-stack web application using Spring framework to monitor Hadoop, RabbitMQ and Spark failures.
  * Automated the standard operating procedures for remediation of Hadoop failures using expect script.
  * Supervisor: Afroz Ahmed
  
Skills
======
* Programming Languages: Python, Java, C, C++, HTML/CSS (Frontend), JavaScript(Backend), SQL
* Libraries: PyTorch, TensorFlow, Scikit-learn, OpenCV
* Technologies/Frameworks: Flask, Spring, Node.js, ExpressJS (MERN)
* DevOps: Git, GitHub (CI/CD), Talend, Jenkins 
* Databases: MongoDB, Vertica, MySQL, PostgreSQL

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams
