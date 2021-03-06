import * as github from '@actions/github'
import * as core from '@actions/core'

export function getCreatedTag(): string | null {
  // eslint-disable-next-line eqeqeq
  if (github.context.eventName != 'create') {
    core.info(`The event was ${github.context.eventName}`)
    return null
  }

  // eslint-disable-next-line eqeqeq
  if (github.context.payload.ref_type != 'tag') {
    core.info('The created reference was a branch, not a tag')
    return null
  }

  return github.context.payload.ref
}