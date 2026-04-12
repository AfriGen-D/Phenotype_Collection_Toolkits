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


### 
    <span style="text-decoration:underline;">NEW developments</span>:



* the incorporation of the African Populations ontology lookup ([AfPO](https://github.com/h3abionet/afpo)) to ascribe population data to research participants
* all toolkits now fully translated into French


### 	<span style="text-decoration:underline;">History</span>


    The Human Heredity and Health in Africa (H3Africa) consortium was established to drive novel and innovative genomics research in Africa and build capacity on the continent. As part of the consortium, the H3Africa Bioinformatics Network (H3ABioNet) was formed to support these efforts, with a particular focus on the production and sharing of FAIR (Findable, Accessible, Interoperable, and Reproducible) data. To facilitate the standardisation and interstudy sharing of phenotypic data both within H3Africa and across consortiums. A Phenotype Harmonisation Working Group was established to enable harmonised phenotypic data collection across diverse studies by defining a core set of commonly collected phenotypes and associated data collection protocols. Initial development focused on a Core Phenotype Toolkit, drawing on and aligning with the PhenX Toolkit to promote interoperability. This work was subsequently expanded to develop domain- and disease-specific phenotype toolkits through consensus mapping across H3Africa projects, identification of shared phenotypes, and selection, adaptation, or development of appropriate protocols suitable for African research settings. All toolkits underwent expert review by African domain specialists, were annotated using international ontologies, and were accompanied by clear data collection guidelines, ensuring their robustness, contextual relevance, and utility for harmonised research both within and beyond H3Africa.


    

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")

	
### Primary Datasets

- **Whole Genome Sequencing (W9999999GS)**: {{ WGS_DESCRIPTION }}
- **Whole Exome Sequencing (WES)**: {{ WES_DESCRIPTION }}
- **Genotyping Arrays**: {{ ARRAY_DESCRIPTION }}
- **{{ CUSTOM_DATA_TYPE }}**: {{ CUSTOM_DESCRIPTION }}

### Reference Resources

- **Population References**: {{ POP_REF_DESCRIPTION }}
- **Variant Catalogs**: {{ VARIANT_CATALOG_DESCRIPTION }}
- **Annotation Resources**: {{ ANNOTATION_DESCRIPTION }}

## Quick Access

### Browse Datasets
```bash
# List available datasets
curl -s {{ API_ENDPOINT }}/datasets | jq '.'

# Get dataset metadata
curl -s {{ API_ENDPOINT }}/datasets/{{ DATASET_ID }} | jq '.'
```

### Download Examples
```bash
# Download single file
wget {{ DOWNLOAD_BASE_URL }}/{{ EXAMPLE_FILE }}

# Download dataset manifest
wget {{ DOWNLOAD_BASE_URL }}/{{ EXAMPLE_DATASET }}/manifest.txt
```

## Documentation

- [Getting Started](/guide/getting-started) - Access and download instructions
- [Data Formats](/guide/data-formats) - File formats and standards
- [Datasets](/api/datasets) - Complete dataset catalog
- [Examples](/examples/) - Usage examples and tutorials

## Data Governance

- **Ethical Approval**: All datasets have appropriate ethical clearance
- **Consent**: Participants provided informed consent for data sharing
- **Privacy**: Individual privacy protected through anonymization
- **Attribution**: Please cite our work when using these resources

## Citation

If you use {{ PROJECT_NAME }} in your research, please cite:

```bibtex
@article{{{ CITATION_KEY }},
  title={{{ CITATION_TITLE }}},
  author={{{ CITATION_AUTHORS }}},
  journal={{{ CITATION_JOURNAL }}},
  year={{{ CITATION_YEAR }}},
  doi={{{ CITATION_DOI }}}
}
```

## Support

- [Documentation](/guide/) - Comprehensive usage guides
- [GitHub Issues](https://github.com/AfriGen-D/{{ REPO_NAME }}/issues) - Technical support
- [Helpdesk](https://helpdesk.afrigen-d.org) - General inquiries
- [AfriGen-D](https://afrigen-d.org) - Project homepage