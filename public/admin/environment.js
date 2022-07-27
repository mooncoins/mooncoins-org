// This file should be overwritten for the apropriate config-<profile>.yml profile
// during the CI phase.  These profiles are designed through usage of the package.json
// and extra config-<profile>.yml files to allow injection directly into index.html header
// before react is loaded, and to allow CI to have a single build for multiple deploys,
// which saves multiple minutes per pipeline run for a multi-deploy pipeline.
const environment = "dev";
