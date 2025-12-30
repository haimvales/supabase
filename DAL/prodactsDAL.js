import supabase from '../db.js';


// export async function getAllRiddeles() {
//     // const { data, error } = await supabase.from('users').select
// }


export async function getUser(username,password) {
    const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .eq('password', password)
    if (error) throw error;
    return data[0]
}

export async function getAllProducts() {
    const { data, error } = await supabase
    .from('prodacts')
    .select('*')
    if (error) throw error;
    return data
}