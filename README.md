# Reaction Timer ⏱️ (리액션 타이머)

간단한 **반응 속도 측정 웹 애플리케이션** 입니다.  
화면의 신호(색 변화나 버튼)가 뜰 때 사용자가 얼마나 빨리 반응하는지(밀리초 단위)를 측정하여 보여줍니다.  
학습용/포트폴리오용으로 만든 프로젝트이며 Flask 백엔드 + HTML/CSS/JS 프론트엔드로 구성되어 있습니다.

---

## 🚀 배포 (실제 서비스)
- Railway에 배포되어 있습니다:  
  👉 [Reaction Timer 실행하기](https://your-app-name.up.railway.app)  
  (위 링크를 네 Railway에서 발급된 주소로 바꿔주세요.)

---

## 🔍 주요 기능
- **반응 신호가 나타나면 클릭하여 반응 시간 측정**  
- **여러 번 측정 후 평균 반응 시간 계산**  
- 간단한 UI로 **즉시 결과 표시** 및 리셋 기능  
- JS의 `setTimeout`과 이벤트 리스너로 랜덤 신호 생성

---

## 🛠 기술 스택
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Python, Flask  
- **WSGI**: gunicorn (배포 시 사용)  
- **배포**: Railway

---

## 📂 프로젝트 구조
```text
reaction-timerrr/
├── static/ # 정적 파일 (CSS, JS)
│ ├── 감구리.css
│ └── 감구리.js
├── templates/ # HTML 템플릿
│ └── 감구리.html
├── 감구리.py # Flask 메인 서버 코드
├── requirements.txt # 필요한 패키지 목록 (Flask, gunicorn 등)
└── Procfile # Railway 배포 설정 (예: web: gunicorn 감구리:app)
```
