import * as core from '@actions/core'
import {run} from '../src/main'

jest.mock('@actions/core')

describe('When running the action', () => {
  // cast function from core to the mocked function that jest defines
  const fakeSetOutput = core.setOutput as jest.MockedFunction<
    typeof core.setOutput
  >

  // in this test we are verifying behavior not implementation details
  test('it should set the release-url output parameter', async () => {
    await run()
    // write assertion with the expect()
    expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything())
  })
})
