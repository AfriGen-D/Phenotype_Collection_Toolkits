---
layout: home

hero:
  name: "{{ PROJECT_NAME }}"
  text: "{{ HERO_TEXT }}"
  tagline: "{{ PROJECT_TAGLINE }}"
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Browse Data
      link: /api/datasets

features:
  - icon: 🌍
    title: African Populations
    details: Comprehensive genomic datasets representing diverse African populations and ethnic groups.
  - icon: 📊
    title: High-Quality Data
    details: Rigorously quality-controlled datasets with comprehensive metadata and provenance.
  - icon: 🔓
    title: Open Access
    details: Freely available data following FAIR principles and ethical guidelines.
  - icon: 🧬
    title: Multiple Data Types
    details: {{ DATA_TYPES_DESCRIPTION }}
  - icon: 🌐
    title: Cloud-Ready
    details: Available on major cloud platforms for scalable analysis.
  - icon: 📖
    title: Well Documented
    details: Comprehensive documentation, tutorials, and usage examples.
---

# About

The Phenotype Toolkits offer standardised data collection protocols for researchers in the genomic and health field (particularly in the African continent). The toolkits enable swift spin up of clinical data collection databases through provision of REDCap .xml files or data dictionaries for other software platforms, helping ensure that essential data variables are collected in a standardised manner, aligned with other research groups making use of these toolkits, and also incorporating international annotations of such variables, thereby making downstream data harmonisation efforts successful.


### 	<span style="text-decoration:underline;">NEW developments:</span>

* the incorporation of the African Populations ontology lookup ([AfPO](https://github.com/h3abionet/afpo)) to ascribe population data to research participants
* all toolkits now fully translated into French


### 	<span style="text-decoration:underline;">History</span>

The Human Heredity and Health in Africa (H3Africa) consortium was established to drive novel and innovative genomics research in Africa and build capacity on the continent. As part of the consortium, the H3Africa Bioinformatics Network (H3ABioNet) was formed to support these efforts, with a particular focus on the production and sharing of FAIR (Findable, Accessible, Interoperable, and Reproducible) data. To facilitate the standardisation and interstudy sharing of phenotypic data both within H3Africa and across consortiums. A Phenotype Harmonisation Working Group was established to enable harmonised phenotypic data collection across diverse studies by defining a core set of commonly collected phenotypes and associated data collection protocols. Initial development focused on a Core Phenotype Toolkit, drawing on and aligning with the PhenX Toolkit to promote interoperability. This work was subsequently expanded to develop domain- and disease-specific phenotype toolkits through consensus mapping across H3Africa projects, identification of shared phenotypes, and selection, adaptation, or development of appropriate protocols suitable for African research settings. All toolkits underwent expert review by African domain specialists, were annotated using international ontologies, and were accompanied by clear data collection guidelines, ensuring their robustness, contextual relevance, and utility for harmonised research both within and beyond H3Africa.

  	
# Usage

### 	<span style="text-decoration:underline;">Who can use the toolkits?</span>
The Phenotype Toolkits are intended to be used for any genomic and health data research. Any researcher or clinician can use the toolkits to collect data from participants in a research study.
### 	<span style="text-decoration:underline;">Why use the phenotype toolkits?</span>
The toolkits offer a standardised set of data collection instruments thoughtfully designed for genomic and health research, providing a quick and easy spin up of a research database.
By using these toolkits collaborating researchers can proactively step towards a greater level of data harmonisation through the use of standardised, annotated metadata and data schema. Any projects that use these toolkits will find harmonisation of datasets with other users much simpler due to the standardised data, the data collection methods guidelines included and the variable naming and formatting. Including international standards of metadata annotation in the toolkits should assist with working towards FAIR data principles particularly with regards to supporting interoperability.
### 	<span style="text-decoration:underline;">How can I setup the toolkits in REDCap?</span>
In order to use the toolkits in REDCap, users must have access to a secure instance at their organisation/institution; the instance must have Multi-language enabled on the system by the REDCap Administrator (if they wish to use translated instruments); a project data manager should have full access to the build and design rights and experience in setting up a research database project on the system. 
Whilst the toolkits enable swift spin up of data collection instruments in a REDCap project, the project will still require customisations necessary for the format of research study being carried out i.e. longitudinal study settings; survey themes and logos; user rights; any additional functional needs for data collection.  Projects can be setup using the .xml file to establish a new project from any one of the toolkits or a project builder can build with the data dictionary files provided (however the data dictionaries will not include the multi-language translations in which case translation files will need to be imported). For further information on practical setup you can review the documentation listed below.
### 	<span style="text-decoration:underline;">Can I edit the toolkits for my purposes?</span>
Modifications to the toolkit instruments through removal of data variables and inclusion of additional ones is possible if needed to align with specific research study objectives however we recommend that any changes should be done carefully so as not to lose the positive benefits of standardisation and ensure that any deletions or additions do not affect the existing branching logic flow of questions and essential data to collect. We do not recommend changing existing variable names, however users can add any additional annotations to the variables if they so choose. Please note that any changes with the translations included will require a review of the translated elements in the MLM tool to approve changes too.

#### [GitHub repository URL](https://github.com/AfriGen-D/Phenotype_Collection_Toolkits)
<!--
#### Download the Implementation Guide

#### Video demonstration of setting up a toolkit project in REDCap

### Translations
-->

### Cite Us
- **Attribution**: One of the ways we can track the usefulness of these toolkits is to identify users through publications citing our toolkits. This is especially helpful for continued improvement of the toolkits, boosting adoption by others and gauging user needs. We hope that these toolkits are valuable and useful enough to warrant your recognition.
 
* Here are some ways you can include us in your publication/s:

* In the methods section: "The data collection toolkits (https://doi.org/10.25375/uct.21152731.v1)used were originally developed by H3ABioNet/H3Africa and later AfriGen-D and were compiled using a variety of resources described in https://GitHub.com/h3abionet/h3aphenstds and, from 2024 onwards, https://github.com/AfriGen-D/Phenotype_Collection_Toolkits."
* In acknowledgements section: "We acknowledge the use of data collection toolkits (https://doi.org/10.25375/uct.21152731.v1) from H3ABioNet/H3Africa which can be found, including associated references, at https://GitHub.com/h3abionet, funded by the H3Africa NIH grant U24HG006941; and AfriGen-D which can be found, including associated references, at https://github.com/AfriGen-D, funded by the AfriGen-D NIH grant U24HG012750.”
* In the references section:"Lyndon Zass, Katherine Johnston, Alia Benkahla, Melek Chaouch, Judit Kumuthini, Fouzia Radouani, Liberata Alexander Mwita, Nihad Alsayed, Taryn Allie, Dassen Sathan, Upendo Masamu, Milaine Sergine Seuneu Tchamga, Tsaone Tamuhla, Chaimae Samtal, Victoria Nembaware, Zoe Gill, Samah Ahmed, Yosr Hamdi, Faisal Fadlelmola, Nicki Tiffin, Nicola Mulder; “Developing Clinical Phenotype Data Collection Standards for Research in Africa”; https://doi.org/10.1155/2023/6693323"

<!--
```bibtex
@article{{{ CITATION_KEY }},
  title={{{ CITATION_TITLE }}},
  author={{{ CITATION_AUTHORS }}},
  journal={{{ CITATION_JOURNAL }}},
  year={{{ CITATION_YEAR }}},
  doi={{{ CITATION_DOI }}}
}
```-->
### Other users

# Toolkits

These toolkits provide data collection forms that can be used to build a research database and can facilitate phenotype standardisation and harmonisation efforts on the African continent and the larger user community. The standards can form the basis for data models for post hoc data harmonisation and also promote FAIR data principles, ultimately enabling data integration and interoperability. The benefits of using these toolkits are multi-fold; (1) The toolkits are all aligned with existing, global data collection standards, (2) the toolkits are specifically adapted for biomedical phenotype data collection in Africa, and (3) the toolkits are highly interoperable, with variables mapped to existing and maintained ontologies.
All toolkits in this suite support standardized biomedical data collection, but the COVID-19 and Microbiome toolkits are tailored to specific research needs. The COVID-19 toolkit focuses on clinical and epidemiological data related to SARS-CoV-2 and associated inflammatory syndromes, capturing both core health variables and outbreak-specific information. The Microbiome toolkit emphasizes participant, sample, and sequencing metadata, supporting human and environmental microbiome studies in line with established standards. Other toolkits in the suite address general biomedical phenotypes across a range of conditions, making them broadly applicable but less specialised for these domain-specific contexts.

The toolkits consist of 13 different phenotype toolkits which can be used as standalone or combined. The Covid 19 and Microbiome toolkits can only be used as stand-alone i.e cannot be combined with other toolkits. The phenotype toolkits are as follows:

## 00: Core Phenotype Toolkit
The H3Africa core phenotypes can be used to collect essential phenotypes related to African health and biomedical research. These phenotypes were prioritised based on the overlap in phenotype data collection across multiple research projects being conducted across the African continent, in various disease fields. Phenotypes include information related to a participant’s demographics, anthropometrics, tobacco and alcohol use, and disease history.

## 01: General Medical History
The General Medical History (GMH) toolkit can be used to collect essential phenotypes associated with GMH research, including: medical history related to allergies, pregnancy(ies), surgeries, vision and hearing disorders, mental disorders, respiratory system disorders, nervous system disorders, musculoskeletal system disorders, endocrine system disorders, digestive system disorders, cardiovascular system disorders, urogenital system disorders, circulatory system disorders, integumentary system disorders, sexually transmitted diseases, and developmental disorders.

## 02: Cancer Toolkit
The Cancer toolkit is an add-on toolkit, which can be used in conjunction with the H3Africa Core Phenotypes toolkit in order to collect essential phenotypes associated with Cancer-related research, including: Cancer Prognosis & Treatment History, Cancer Screenings and Cancer Family History.

## 03: Stroke Toolkit
The Stroke toolkit can be used to collect essential phenotypes associated with Stroke-related research, including: Stroke Characterisation; Stroke Verification; Primary Prevention and Secondary Prevention.

## 04: Infectious Diseases  Toolkit
The Infectious Disease toolkit can be used to collect essential phenotypes associated with Infectious Disease related research, including information related to Malaria, Trypanosomiasis / Sleeping Sickness, Tuberculosis (TB) and HIV.

## 05: Cardiovascular Diseases Toolkit
The Cardiovascular Disease (CVD) toolkit can be used to collect essential phenotypes associated with CVD related research, including; Anthropometrics, CVD History (Angina, Heart Attack, Congestive Heart Failure, Thyroid Disease) and more.

## 06: Rare & Developmental Disorders Toolkit
The Rare & Developmental (R&D) Disorder toolkit can be used to collect essential phenotypes associated with R&D related research, including: Birth History, Neurodevelopmental History, Epilepsy and System Anomalies.

## 07: Environmental Exposures Toolkit
The Environmental Exposures toolkit can be used to collect information pertaining to: socio-economic status, occupational history, water resources and more.

## 08: Lifestyle Factors Toolkit
The Lifestyle Factors toolkit can be used to collect essential phenotypes associated with Lifestyle Factors in biomedical research, including: Physical Activity, Diet, Sleep Habits and more.

## 09: Family History Toolkit
The FH toolkit can be used to collect essential information pertaining to the medical history of a research participant’s family. First, we define the types of relationships within the family, as we acknowledge that some family composition is not always biological. We then break down the various medical information we wish to glean into their various body systems, such as respiratory system, musculoskeletal system, nervous system etc.

## 10: Kidney Disease Toolkit
The Kidney Disease toolkit can be used to collect essential phenotypes associated with Kidney Disease-related research including personal History of Kidney Failure, Kidney Function Assay and Blood Cell Count.

## Covid-19 Toolkit
The COVID-19 module can be used to collect essential phenotypes associated with COVID-19 and MISC-related research, including: COVID-19 Exposure History; Symptoms and Signs; Comorbidities; COVID-19 Diagnoses and Treatments. The module is subdivided into core phenotypes (phenotypes incorporated from the H3Africa Standard) and COVID-19 & MISC-specific phenotypes.

## Microbiome Toolkit
The Microbiome Research Data Toolkit is a multi-purpose toolkit which can be used to annotate microbiome research studies, for curation, proliferation and sharing, as well as prospectively standardise and retrospectively harmonise research participant-related information enrolled in microbiome studies and collaborations.

## Each of these toolkits have a folder which contains the following:

#### i) Guideline
#### ii) REDCap XML file
#### iii) Annotated PDF file - in both languages
#### iv) A data dictionary
#### v) README 
#### vi) Translation file

More information about these toolkits will be provided in the individual README files of the toolkits.

# Support

Support is available at no cost directly to users who may feel uncertain about deploying the toolkits in REDCap or what they need to make use of them. You can post a request for support via the AfriGen-D Helpdesk and one of our team will get back to you to respond to your query or set up a meeting to explore your support needs further.

If you find problems in the design of the toolkits that you feel need addressing or you have recommendations to make - you can also log an issue on the GitHub repository itself.
	
Want to work with us? How to get involved. We encourage participation from the community! If you have a bug, suggestion or idea, browse the open issues before opening a new one. Please use the GitHub issue tracker to submit any comments or suggestions. We value the continued maintenance and improvement of the developed packages, and appreciate your feedback.

- [GitHub Issues](https://github.com/AfriGen-D/Phenotype_Collection_Toolkits/issues) - Technical support
- [Helpdesk](https://helpdesk.afrigen-d.org) - General inquiries
- [AfriGen-D](https://afrigen-d.org) - Project homepage

<!--
# FAQ -->