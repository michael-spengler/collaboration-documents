export function rewardContributor(param1: string) {
    // tbd - e.g. using https://github.com/marketplace/actions/cla-assistant-lite
    // CLAAssistant.requestCLASignature()

    console.log(`hello world - ${param1}`)
}

const param1 = Deno.args[0]

rewardContributor(param1)
