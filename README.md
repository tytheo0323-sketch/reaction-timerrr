# Reaction Timer ⏱️

이 프로젝트는 사용자의 **반응 속도**를 측정하는 간단한 웹 애플리케이션입니다.  
Flask를 백엔드로 사용하고, HTML/CSS/JS로 프론트엔드를 구성했습니다.  

---

## 🚀 주요 기능
- **반응 속도 측정**: 화면에 신호(색상 변화, 버튼 표시 등)가 나오면 클릭하여 시간을 기록  
- **평균 속도 계산**: 여러 번 시도한 기록을 토대로 평균 반응 시간 계산  
- **UI/UX 디자인**: HTML/CSS로 직관적인 인터페이스 제공  
- **JS 로직**: `setTimeout`, 이벤트 리스너를 활용하여 랜덤한 신호 생성

---

## 🛠 기술 스택
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Flask (Python)  
- **배포**: Railway (Gunicorn + Procfile)

---

## 🚀 배포 링크
👉 [Reaction Timer 실행하기](https://your-app-name.up.railway.app)  
(위 링크를 네 Railway에서 발급된 주소로 바꿔주세요.)

---

## 📂 프로젝트 구조reaction-timerrr/
├── static/ # 정적 파일 (CSS, JS)
│ ├── 감구리.css
│ └── 감구리.js
├── templates/ # HTML 템플릿
│ └── 감구리.html
├── 감구리.py # Flask 메인 서버 코드
├── requirements.txt # 필요한 패키지 목록 (Flask, Gunicorn)
└── Procfile # Railway 배포 설정
