from ubuntu:18.04

RUN apt update && apt install -y python3 python3-pip git libsasl2-dev libldap2-dev libssl-dev

RUN python3 -m pip install wheel

RUN git clone https://github.com/Humbedooh/pypubsub
RUN cd pypubsub && python3 -m pip install -r requirements.txt
WORKDIR pypubsub
COPY pypubsub.yaml .

CMD ["python3","pypubsub.py"]
