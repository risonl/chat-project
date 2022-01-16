export const getTest = async (req, res) => {
    res.status(200).json('successful get');
    console.log('get works')
};

export const postTest = async (req, res) => {
    res.status(201).json('successful post');
    console.log('post works')
}