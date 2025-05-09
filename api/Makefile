init:
	python3 -m venv venv && \
	source ./venv/bin/activate && \
	python3 -m venv .venv && \
	pip install --upgrade pip && \
	pip install -r requirements.txt && \
	pip install -r requirements-dev.txt

dev:
	source ./venv/bin/activate && \
	cd ./src && \
	uvicorn main:app --reload

format:
	source ./venv/bin/activate && \
	black ./src && \
	isort ./src && \
	flake8 ./src --max-line-length=120
