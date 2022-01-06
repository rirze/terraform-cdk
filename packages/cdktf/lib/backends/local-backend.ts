import * as path from "path";
import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";
import { TerraformStack } from "..";

export class LocalBackend extends TerraformBackend {
  private readonly props: LocalBackendProps;
  constructor(scope: Construct, props: LocalBackendProps = {}) {
    super(scope, "backend", "local");

    const stackId = TerraformStack.of(this).node.id;
    this.props = {
      ...props,
      path:
        props.path || path.join(process.cwd(), `terraform.${stackId}.tfstate`),
    };
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }
}

export class DataTerraformRemoteStateLocal extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateLocalConfig
  ) {
    super(scope, id, "local", config);
  }
}

export interface LocalBackendProps {
  readonly path?: string;
  readonly workspaceDir?: string;
}

export interface DataTerraformRemoteStateLocalConfig
  extends DataTerraformRemoteStateConfig,
    LocalBackendProps {}
