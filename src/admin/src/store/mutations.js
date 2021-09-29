export default {
    SET_ICONS(state, payload) {
        state.icons = payload
    },
    SET_STATUS(state, payload) {
        state.status = payload
    },
    SET_SHORTCODE(state, payload) {
        state.shortcode = payload
    },
    SET_CATEGORIES(state, payload) {
        state.categories = payload
    },
    SET_CURRENT_CATEGORY(state, payload) {
        state.currentCategory = payload
    },
    SET_CATEGORY(state, paylod) {
        state.category = {...paylod};
    },
    SET_DOCUMENTS(state, payload) {
        state.documents = payload
    },
    SET_LOADING_DOCUMENTS(state, payload) {
        state.loadingDocuments = payload
    },
    SET_DOCUMENT(state, paylod) {
        state.document = {...paylod};
    },
    SET_CURRENT_DOCUMENT(state, payload) {
        state.currentDocument = payload
    },
    SET_CURRENT_PAGE(state, payload) {
        state.currentPage = payload
    },
    SET_TOTAL_PAGES(state, payload) {
        state.totalPages = payload
    },
    SHOW_CATEGORY_MODAL(state, payload) {
        state.showCategoryModal = payload
    },
    SHOW_DOCUMENT_MODAL(state, payload) {
        state.showDocumentModal = payload
    },
    SHOW_SHORTCODE_MODAL(state, payload) {
        state.showShortcodeModal = payload
    },
    SHOW_MESSAGE(state, payload) {
        state.showMessage = payload
    },
    SET_MESSAGE(state, payload) {
        state.message = payload
    }
}