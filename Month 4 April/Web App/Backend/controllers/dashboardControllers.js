// get all dashboard count to show in dashboard page

const getDashboardCount = async (req ,res) => {
try {
    
    res.status(200).json({
            message: "get dashboard data Successfully",
        })

} catch (error) {
   console.log(error.message)
    res.status(404).json({
        message : "Error while getting data",
        error : error.message
    })
}
}


module.exports = { getDashboardCount }