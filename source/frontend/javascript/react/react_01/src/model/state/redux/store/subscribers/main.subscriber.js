const mainSubscriber = (store) => () => {
	console.log(store ? store.getState() : null)
}

export default mainSubscriber
