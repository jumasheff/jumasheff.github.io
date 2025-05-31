# Chirpy Jekyll Theme

A minimal, responsive, and feature-rich Jekyll theme for technical writing.

## Getting Started

This guide provides instructions on how to set up, run, and deploy your Chirpy-based website.

## Setting up the Environment

You have two primary methods to set up your development environment:

### 1. Setting up Natively (Recommended for Unix-like OS)

For Unix-like systems, you can set up the environment natively for optimal performance.

**Steps**:

1.  Install Jekyll and Git: Follow the [Jekyll installation guide](https://jekyllrb.com/docs/installation/) to install Jekyll. Ensure Git is also installed.
2.  Clone your repository to your local machine.
3.  If you forked the theme, install Node.js and run `bash tools/init.sh` in the root directory to initialize the repository.
4.  Install dependencies: Run `bundle` in the root of your repository.

### 2. Using Dev Containers (Recommended for Windows)

Dev Containers offer an isolated environment using Docker, preventing conflicts with your system and ensuring all dependencies are managed within the container.

**Steps**:

1.  Install Docker:
    *   On Windows/macOS, install [Docker Desktop](https://www.docker.com/products/docker-desktop/).
    *   On Linux, install [Docker Engine](https://docs.docker.com/engine/install/).
2.  Install VS Code and the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
3.  Clone your repository:
    *   For Docker Desktop: Start VS Code and clone your repository in a container volume.
    *   For Docker Engine: Clone your repository locally, then open it in a container via VS Code.
4.  Wait for the Dev Containers setup to complete.

## Usage

### Start the Jekyll Server

To run the site locally, use the following command:

```bash
bundle exec jekyll serve
```

> If you are using Dev Containers, you must run this command in the VS Code Terminal.

After a few seconds, the local server will be available at `http://127.0.0.1:4000`.

### Configuration

Update the variables in `_config.yml` as needed. Some typical options include:

*   `url`
*   `avatar`
*   `timezone`
*   `lang`

Social contact options can be enabled or disabled in the `_data/contact.yml` file.

## Deployment

Before deploying, ensure the `url` in `_config.yml` is configured correctly. If you are not using a custom domain, or if you want to visit your website with a base URL on a web server other than GitHub Pages, set the `baseurl` to your project name (e.g., `/project-name`).

### Deploy Using GitHub Actions

1.  If you’re on the GitHub Free plan, keep your site repository public.
2.  If you have committed `Gemfile.lock` and your local machine is not running Linux, update the platform list of the lock file:
    ```bash
    bundle lock --add-platform x86_64-linux
    ```
3.  Configure GitHub Pages:
    *   Go to your repository on GitHub.
    *   Select the _Settings_ tab, then click _Pages_ in the left navigation bar.
    *   In the **Source** section (under _Build and deployment_), select **GitHub Actions** from the dropdown menu.
4.  Push any commits to GitHub to trigger the _Actions_ workflow. The site will be deployed automatically after the _Build and Deploy_ workflow completes successfully.

### Manual Build and Deployment

For self-hosted servers:

1.  Navigate to the root of your project.
2.  Build your site:
    ```bash
    JEKYLL_ENV=production bundle exec jekyll b
    ```
3.  The generated site files will be in the `_site` folder. Upload these files to your target server.

---
For more detailed documentation, please refer to the [Chirpy theme documentation](https://chirpy.cotes.page/posts/getting-started/).
