#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack, LocalBackend


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)
        LocalBackend(self)

        # define resources here


app = App()
MyStack(app, "{{ $base }}")

app.synth()
