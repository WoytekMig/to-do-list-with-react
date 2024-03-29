export const getExampleTasks = async () => {
    const response = await fetch("/to-do-list-with-react/exampleTasks.json");

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};