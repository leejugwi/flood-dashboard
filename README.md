# 디지털 트윈 기반 도시침수 스마트 대응 시스템

### : KT AIVLE School 5기 Big Project - AI트랙 9반 26조

## 프로젝트 설명
# 도시침수 및 홍수와 같은 현실 속에서 벌어지고 있는 수해로 인한 피해를 최소화하고 더불어 피해 해결을 돕기 위한 서비스 “광주광역시 도시 침수 대응 시스템"
실제 침수 피해 발생 시, 지자체 대응 시스템이 현업 부서별로 각기 운영되고, 국가 하천과 지방 하천의 소관 관리 주체가 상이하다는 문제점으로 인해 신속한 대응이 어려운 상황에서 이를 보완하기 위한 담당 공무원부터 일반 사용자까지 하나의 플랫폼으로 침수 대응 및 후속 대응을 지원하는 서비스인 “광주광역시 도시 침수 대응 시스템"

 - 특징
|-- Logistic Regression을 이용한 홍수 확률 제공 및 실시간 하천 수위  
|-- 1)선형 모델로 선형성을 갖는 데이터(강수량, 수위)에 적합
|-- 2)각 변수의 계수를 직접적으로 해석 가능
|-- 3)변수 - 종속 변수 간의 관계를 명확히 이해 가능

|-- RandomForest를 이용한 침수 예상 지역 확인 및 과거 침수 지역 비교 가능
|-- 1)다른 모델에 비해 강수량에 민감
|-- 2)과거 침수 지역과 다수 겹치는 양상

|-- yolov9를 이용한 도로이상탐지
|-- 1)높은 정확도와 빠른 속도
|-- 2)실시간 object detection 가능
|-- 3)단일 신경망 구조로 효율성, 적용 가능성을 가짐

|-- 챗봇을 통한 침수 대응 메뉴얼 및 대피소 정보 제공 => langchain, vectorstores, ChromaDB와 OpenAI임베딩
|-- 1)문서를 검색하고 사용자에게 적절한 정보를 제공


## 파일 구조

```
/Service
|-- /ToDoList         # Client-side code
|   |-- /ToDoList       # Django Setting files
|   |-- /board         #
|   |-- /board_data         #
|   |-- /chatbot         #
|   |-- /data        #
|   |-- /detect        #
|   |-- /find_ps        #
|   |-- /find_username        #
|   |-- /images        #
|   |-- /login        #
|   |-- /main        #
|   |-- /media        #
|   |-- /rain        #
|   |-- /signup        #
|   |-- /templates        #
|   |-- /terms        #
|   |-- /uploads        #
|   |-- /waterlevel        #
|   |-- package.json  #
|-- /myvenv           # Virtual-Environment
|   |-- 이건 안 넣어도 되지 않나?     # Server setup and endpoints
|-- .gitignore        # Specifies intentionally untracked files to ignore
|-- requirements.txt  # Script to install client dependencies
|-- README.md         # This file
```

## 기술 스택

## Dependencies

```
flood-dashboard@1.0.0
|-- django==3.2.6
|-- langchain-openai==0.1.15
|-- langchain-community==0.2.7
|-- openai==1.35.13
|-- geopy
|-- faiss-cpu
|-- tiktoken
|-- rank_bm25
|-- openpyxl
|-- scikit-learn==1.5.0
|-- torch==2.3.1
|-- ultralytics==8.2.57
|-- pydantic==2.8.2
|-- django-environ>=0.4.5
|-- chromadb==0.5.0
|-- numpy==1.24.3
```

## Developer Info.

| 성명                                      | 역할                                                                                                       |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [소부승](https://github.com/bootkorea)    | PM, 도로 파손 탐지(AI 모델 설계, 데이터 전처리), 홍수 예측 (AI 모델 설계, 데이터 전처리), 관련 백엔드 구현 |
| [고병진](https://github.com/gobyeongjin)  | AI                                                                                                         |
| [윤서연](https://github.com/syu357)       | AI                                                                                                         |
| [이주헌](https://github.com/leejugwi)     | AI                                                                                                         |
| [김수빈](https://github.com/subin16)      | Web                                                                                                        |
| [박경민](https://github.com/PNamju)       | Web                                                                                                        |
| [정유리](https://github.com/jeongYuri)    | Web                                                                                                        |
| [황인태](https://github.com/dlsxodlsghks) | Web                                                                                                        |
| [홍기원](https://github.com/Hongwon123)   | Web                                                                                                        |
