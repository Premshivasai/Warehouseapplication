using Microsoft.AspNetCore.Mvc;

namespace ScanApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ScanController : ControllerBase
    {
        [HttpPost]
        public IActionResult SaveScan([FromBody] ScanData scan)
        {
            Console.WriteLine($"Received Scan: {scan.BarcodeValue} at {scan.Timestamp}");
            return Ok(new { message = "Scan saved!" });
        }
    }

    public class ScanData
    {
        public string BarcodeValue { get; set; }
        public DateTime Timestamp { get; set; }
    }
}
