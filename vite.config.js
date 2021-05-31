export default ({ command, mode }) => {
    if (command === 'serve') {
        return {
            root: 'src/',
            build: {
                outDir: '../'
            }
        }  
    } else {
        return {
            root: 'src/',
            base: '/animon-site',
            build: {
                outDir: '../'
            }
        }  
    } 
}