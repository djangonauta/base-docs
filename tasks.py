#!/usr/bin/env python3
import invoke


@invoke.task(default=True)
def run(ctx, source='docs', output='build/html', host='0.0.0.0', port='9000'):
    ctx.run('make clean')
    ctx.run('make html')
    ctx.run(f'sphinx-autobuild {source} {output} --host {host} --port {port}', pty=True, echo=True)
