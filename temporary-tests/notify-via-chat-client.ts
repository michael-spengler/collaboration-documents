export function notifyViaChatClient(param1: string) {

    console.log(`hello world - ${param1}`)
}

const param1 = Deno.args[0]

notifyViaChatClient(param1)
