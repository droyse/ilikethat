import React from 'react'
import firebase from 'firebase/app'

const storage = firebase.storage()

export default class FirebaseStorageImg extends React.Component {
state = {url: null}

componentDidMount() { this.getUrl() }

componentDidUpdate(prevProps) { 
if(this.props.storagePath !== prevProps.storagePath) {
this.getUrl()
}
}

async getUrl() {
// FIXME: potential race condition if storagePath changes quickly
// would be fixed with switchMap or concatMap
const {storagePath} = this.props
if(storagePath) {
try {
const url = await storage.ref(storagePath).getDownloadURL()
this.setState({url})
} finally {}
} else {
this.setState({url: null})
}
}

render() {
const {defaultUrl, storagePath, alt, ...props} = this.props
const url = this.state.url || this.props.defaultUrl
return <img {...props} alt={alt} src={url}/>
}
}