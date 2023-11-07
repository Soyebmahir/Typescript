{
    // asynchronous typescript

    // simulate
    const CreatePromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data = 'hey'
            if (data) {
                resolve(data)
            } else {
                reject('failed to load')
            }
        })
    }

    // call createPromise function
    const showData = async (): Promise<string | unknown> => {
        try {
            const data: string = await CreatePromise()
            console.log(data);
            return data
        } catch (error) {
            console.log(error);
            const error1: unknown = error
            return error1

        }

    }
    showData()
    // same case for boolean / number/ object etc







    //
}
{
    // simulate
    type something = { somehting: string }
    const CreatePromise = (): Promise<something> => {
        return new Promise<something>((resolve, reject) => {
            const data: something = { somehting: 'Who knows' }
            if (data) {
                resolve(data)
            } else {
                reject('failed to load')
            }
        })
    }

    // call createPromise function
    const showData = async (): Promise<something | unknown> => {
        try {
            const data: something = await CreatePromise()
            console.log(data);
            return data
        } catch (error) {
            console.log(error);
            const error1: unknown = error
            return error1

        }

    }
    showData()
    // same case for boolean / number/ object etc

    // lets try with api
    type data = {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }

    const loadData = async (): Promise<data> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()
        console.log(data);
        return data

    }
    loadData()





    //
}