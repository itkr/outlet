init:
	source ./venv/bin/activate && \
	python3 -m venv .venv && \
	pip install --upgrade pip && \
	pip install -r requirements.txt && \
	pip install -r requirements-dev.txt

activate:
	source ./venv/bin/activate

dev:
	source ./venv/bin/activate && \
	uvicorn main:app --reload
