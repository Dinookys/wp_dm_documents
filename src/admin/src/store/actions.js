import axios from "axios";

const dmDocuments = {...window.dm_documents};

const serializeObj = (obj) => {
    return Object.keys(obj).map(function(key) {
        return key + '=' + encodeURIComponent(obj[key]);
    }).join('&');
}

const getDocuments = ({commit}, payload) => {
    commit("SET_LOADING_DOCUMENTS", true);

    let params = serializeObj(payload);
    axios.get(`/b/documents/list?${params}` ).then((resp) => {
        try {
            let { items, current_page, total_pages } = resp.data;            
            commit('SET_DOCUMENTS', items);                
            commit('SET_CURRENT_PAGE', current_page);                
            commit('SET_TOTAL_PAGES', total_pages);

        } catch (e) { console.error(e) }

        commit("SET_LOADING_DOCUMENTS", false);

    }).catch(() => {
        commit('SET_DOCUMENTS', []);
        commit('SET_CURRENT_PAGE', 0);
        commit('SET_TOTAL_PAGES', 0);
        commit("SET_LOADING_DOCUMENTS", false);
    });
}

const newCategory = ({commit}) => {    
    commit('SHOW_CATEGORY_MODAL', true);
    commit('SET_CATEGORY', dmDocuments.empty.category);
}

const newDocument = ({commit, state}) => {

    commit('SHOW_DOCUMENT_MODAL', true);
    commit('SET_DOCUMENT', {
        ...dmDocuments.empty.document,
        ID_category: state.currentCategory.ID || 0
    });
}

const saveCategory = async ({commit, dispatch}, payload) => {

    let result = '';
    await axios.post('/b/categories/save', payload).then(({data}) => {
        result = data;

        if('categories' in data) {
            commit('SET_CATEGORIES', data.categories);            
        }

        if(!payload.ID) {
            dispatch('newCategory');
        }
        
    });

    return new Promise((resolve) => {         
        if(result.messages && 'validation_errors' in result.messages) {
            result.validations = result.messages.validation_errors;
            delete result.messages;
        }        
        resolve(result)
    })
}

const saveDocument = async ({dispatch}, payload) => {

    let result = '';
    await axios.post('/b/documents/save', payload).then(({data}) => {
        result = data;

        if(!payload.ID) {
            dispatch('newDocument')
        }
        
    });

    return new Promise((resolve) => {         
        if(result.messages && 'validation_errors' in result.messages) {
            result.validations = result.messages.validation_errors;
            delete result.messages;
        }        
        resolve(result)
    })
}

const removeCategory = async ({commit}, payload) => {
    await axios.post('/b/categories/delete', payload).then(({data}) => {
        try {

            if(data.categories) {
                commit('SET_CATEGORIES', data.categories);
            }

            if(data.messages) {
                commit('SET_MESSAGE', data.messages)
                commit('SHOW_MESSAGE', true)
            }

        } catch (e) {
            console.log(e);
        }
    });
}

const removeDocument = async ({commit}, payload) => {
    await axios.post('/b/documents/delete', payload).then(({data}) => {
        try {
            let { items, current_page, total_pages } = data;            
            commit('SET_DOCUMENTS', items);
            commit('SET_CURRENT_PAGE', current_page);
            commit('SET_TOTAL_PAGES', total_pages);

        } catch (e) {
            console.log(e);
        }
    });
}

export default {
    newDocument,
    newCategory,
    saveCategory,
    saveDocument,
    getDocuments,
    serializeObj,
    removeCategory,
    removeDocument
}