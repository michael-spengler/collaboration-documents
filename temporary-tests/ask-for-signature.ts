
export function askForSignature(param1: string) {

    console.log(`hello world - ${param1}`)
}

const param1 = Deno.args[0]

askForSignature(param1)
