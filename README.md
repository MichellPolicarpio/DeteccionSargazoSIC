# Detección automática de sargazo mediante Redes Neuronales Convolucionales

## Proyecto Final para Samsung Innovation Campus

### Descripción del Proyecto
Este proyecto desarrolla un modelo basado en inteligencia artificial para la detección automática de sargazo en playas mediante técnicas de visión computacional y redes neuronales convolucionales (CNN), implementando una arquitectura U-Net para segmentación semántica.

### [Ver Web explicativa del Proyecto](https://michellpolicarpio.github.io/DeteccionSargazoSIC/)

### Problema Abordado 🏖️
La acumulación masiva de sargazo en las playas del Caribe y Golfo de México genera impactos negativos en:
- Ecosistemas costeros y biodiversidad marina
- Sector turístico (aspecto visual y olor desagradable)
- Salud pública y comunidades locales

### Objetivo Principal 🎯
Desarrollar un sistema que permita:
- Identificar y cuantificar la presencia de sargazo con alta precisión
- Proporcionar una alternativa escalable y efectiva frente a métodos tradicionales
- Facilitar el monitoreo costero automatizado

### Metodología Técnica
#### Estructura del Proyecto
- **Recopilación de datos**: Imágenes georreferenciadas de Mahahual, Quintana Roo (2019-2021)
- **Preprocesamiento**: Segmentación con máscaras de anotación para aprendizaje supervisado
- **Desarrollo del sistema**: Arquitectura U-Net implementada con TensorFlow y Keras
- **Evaluación**: Métricas cuantitativas (Exactitud, IoU, Matriz de confusión)

### Tecnologías Utilizadas
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)

### Resultados Obtenidos 📊
- **Exactitud global**: 91.45%
- **Mean IoU**: 82.48%
- **Precisión clase sargazo**: 92%
- **Precisión clase arena**: 85%
- **Precisión clase otros**: 94%

### Recursos Adicionales
- [Repositorio GitHub](https://github.com/MichellPolicarpio/DeteccionSargazoSIC/)
- [Dataset Utilizado](https://figshare.com/articles/dataset/Sargassum_Segmented_Dataset/16550166?file=30598743)
- [Documentación Técnica](https://uvmx-my.sharepoint.com/:b:/g/personal/zs21002379_estudiantes_uv_mx/ETTRX30vakNDkzd_f5WmRi8BQmVRtDtcMESGTQP1jSIEZQ?e=KRpNdc)

### Conclusiones
El modelo propuesto demostró efectividad significativa en la detección automática de sargazo, confirmando la idoneidad de las CNNs en aplicaciones ambientales. Futuras investigaciones podrían ampliar el conjunto de datos con diversas condiciones ambientales y crear datasets específicos para playas de Veracruz.

### Equipo 👥
- Isabella Coria Juarez
- Lizette Ariadna Hernández Ortiz
- Michell Alexis Policarpio Moran
- Victor Daniel Moreno Luna
- Brandon Josafat Mota López
- Alexis Rivera Merlin
