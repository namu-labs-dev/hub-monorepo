# namu-labs guides

### rules

1. branch name prefix: `namu-labs/`

### run

* clone

```bash
$ git clone --branch namu-labs/main https://github.com/namu-labs-dev/hub-monorepo.git

$ cd hub-monorepo.git
```

* install dependencies

```bash
$ yarn
```

* monorepo packages build

```bash
$ yarn build
```

* replicator build

```bash
$ cd apps/replicator
$ yarn build
```

* replicator infra

replicator 동작에 필요한 시스템을 구동한다.

```bash
$ docker-compose up postgres redis statsd -d
```

* environment

`apps/replicator/.env` 생성 후 다음 변수들을 적절히 변경

```
LOG_LEVEL=info
COLORIZE=true
# Set this higher the further the hub is from the replicator
CONCURRENCY=16
WORKER_TYPE=thread
WEB_UI_PORT=9000
REDIS_URL=127.0.0.1:16379
POSTGRES_URL=postgres://replicator:password@127.0.0.1:6541/replicator
STATSD_HOST=127.0.0.1:18125
HUB_HOST=127.0.0.1:2283
HUB_SSL=false%
```

* run

실행 시 `apps/replicator/src/migrations` 마이그레이션 파일들에 정의된 up을 실행하여 마이그레이션 수행

```bash
# path: apps/replicator
$ node build/app.js start
```

http://localhost:9000 replicator의 동작을 확인할 수 있다.

* only migration

마이그레이션만 진행하고 싶다면 start 대신 migration 명령을 수행한다.

```bash
# path: apps/replicator
$ node build/app.js migrate
```

