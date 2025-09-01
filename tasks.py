import sys

from invoke.tasks import task

is_windows = sys.platform.startswith("win")


@task
def clean(c):
    c.run("make clean", echo=True, pty=not is_windows)


@task
def build(c, host="0.0.0.0", port=9000):
    cmd = f"sphinx-autobuild ./docs ./build --host {host} --port {port}"
    c.run(cmd, echo=True, pty=not is_windows)


@task
def docs(c, host="0.0.0.0", port=9000):
    clean(c)
    build(c, host, port)
