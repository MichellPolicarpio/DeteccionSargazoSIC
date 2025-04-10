# 🌊 Detección de Sargazo mediante Redes Neuronales Convolucionales: Un Enfoque de Segmentación Semántica

## Descripción del Proyecto
Este proyecto implementa un modelo basado en inteligencia artificial para la detección automática de sargazo en playas mediante técnicas de visión computacional y redes neuronales convolucionales (CNN). Utilizando una arquitectura U-Net para segmentación semántica, el sistema logra identificar y cuantificar la presencia de sargazo con alta precisión.

### Link de visualización del reporte
https://michellpolicarpio.github.io/DeteccionSargazoSIC/

## Problema Abordado 🏖️
La acumulación masiva de sargazo en costas del Caribe y Golfo de México representa un desafío significativo para:
- Ecosistemas costeros
- Sector turístico (reducción de visitantes y tiempo de permanencia)
- Salud pública (emisión de gases nocivos durante su descomposición)

## Objetivo Principal 🎯
Desarrollar un sistema que permita:
- Detección automatizada de sargazo mediante aprendizaje profundo
- Cuantificación precisa de áreas afectadas mediante segmentación por píxeles
- Monitoreo costero eficiente y escalable

## Metodología Técnica
### Componentes Clave
- Técnicas avanzadas de visión por computadora
- Redes neuronales convolucionales para clasificación
- Segmentación semántica de imágenes a nivel de píxel
- Arquitectura U-Net optimizada para procesamiento de imágenes costeras

### Proceso de Desarrollo
1. **Recopilación de datos**: Imágenes georreferenciadas obtenidas mediante crowdsourcing
2. **Preprocesamiento**: Redimensionamiento a 256x256 píxeles y normalización
3. **Implementación del modelo**: Arquitectura U-Net con TensorFlow y Keras
4. **Entrenamiento supervisado**: División 80/20 (entrenamiento/validación)
5. **Evaluación de rendimiento**: Métricas de precisión y segmentación

### Fuente de Datos
- Imágenes georreferenciadas de Mahahual, Quintana Roo
- Periodo de captura: Septiembre 2019 - Agosto 2021
- Plataforma de crowdsourcing: Collective View

## Tecnologías Utilizadas
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)

## Resultados Obtenidos 📊
- **Precisión global**: 91.45%
- **Mean IoU**: 82.48%
- **Precisión específica para clase sargazo**: 92%
- **Pérdida (Loss)**: 0.3822

El modelo demostró alta capacidad para distinguir entre:
- Sargazo (Clase 1): 92% de precisión
- Arena (Clase 0): 85% de precisión
- Otros elementos (Clase 2): 94% de precisión

## Relevancia y Aplicaciones 🌍
El proyecto contribuye a:
- Comprender la dinámica del sargazo y sus patrones de arribazón
- Desarrollar soluciones tecnológicas accesibles para comunidades costeras
- Fortalecer la resiliencia local ante fenómenos ambientales
- Proporcionar información precisa para la toma de decisiones en gestión ambiental

## Limitaciones y Trabajo Futuro
- Ampliar el conjunto de datos con imágenes de diversas condiciones ambientales
- Desarrollar un dataset específico para playas de Veracruz
- Mejorar el rendimiento en escenarios con bajo contraste visual

## Proyecto desarrollado para:
- Samsung Innovation Campus
- Universidad de México (UDEM)

## Autores 👥
- Coria Juarez Isabella
- Hernández Ortiz Lizette Ariadna
- Policarpio Moran Michell Alexis
- Moreno Luna Victor Daniel
- Mota López Brandon Josafat
- Rivera Merlin Alexis

## Recursos Adicionales
- [Notebook del Proyecto](https://colab.research.google.com/drive/1BQrcnOPRvfcF5NC9O2KST1Fas7E0239c?usp=sharing)
- [Repositorio GitHub](https://github.com/MichellPolicarpio/DeteccionSargazoSIC/)
- [Dataset Utilizado](https://figshare.com/articles/dataset/Sargassum_Segmented_Dataset/16550166?file=30598743)
