import * as core from '@actions/core'
import * as github from '@actions/github'

export namespace Util {
  export function getOctokit() {
    const token = core.getInput('GITHUB_TOKEN', { required: true })
    return github.getOctokit(token)
  }

  export function getBlockingLabels() {
    const raw = core.getInput('labels') || ''
    const presets = ['do-not-merge', 'wip', 'rfc']
    const labels = raw.split(/\s?,\s?/).map((label) => label.trim())
    return labels.length ? labels : presets
  }

  export function getBlockingKeywords() {
    const raw = core.getInput('keywords') || ''
    const presets = ['WIP', 'wip', 'RFC', 'rfc']
    const keywords = raw
      .split(/\s?,\s?/)
      .map((keyword) => keyword.trim().toLocaleLowerCase())
    return keywords.length ? keywords : presets
  }

  export function getContect() {
    return core.getInput('context') || 'WIP'
  }

  export function getTargetUrl() {
    const url = core.getInput('target_url') || ''
    return url.length ? url : undefined
  }
}
