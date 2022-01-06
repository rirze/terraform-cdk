import { Construct } from "constructs";
import { App, TerraformStack, LocalBackend } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    new LocalBackend(this);

    // define resources here
  }
}

const app = new App();
new MyStack(app, "{{ $base }}");
app.synth();
