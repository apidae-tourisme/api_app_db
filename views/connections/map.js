/**
 * Groups a seed with its connected neighbors - current seed comes first
 * Query example : /database/_design/api_app_db/_view/connections?reduce=false&key="abcd"&include_docs=true
 */
function(doc) {
    emit(doc._id, {_id: doc._id});
    for(var c in doc.connections) {
        emit(doc._id, {_id: doc.connections[c]});
    }
}
    