import { Monitor, Cpu, HardDrive, MemoryStick } from 'lucide-react';
import './SystemRequirements.css';

// Receives the guide's systemRequirements object directly (not the whole guide) —
// this component only needs to know about requirements, nothing else about the guide.
// Keeping props narrow like this makes components easier to reuse and test.
function SystemRequirements({ requirements }) {
  return (
    <div className="sys-req">
      <h2>System Requirements</h2>
      <div className="sys-req-grid">
        <div className="sys-req-item">
          <Monitor size={20} className="sys-req-icon" />
          <div>
            <span className="sys-req-label">Operating System</span>
            {/* .join(', ') turns the os array ["Windows 10", "Windows 11"]
                into a readable string "Windows 10, Windows 11" */}
            <p>{requirements.os.join(', ')}</p>
          </div>
        </div>

        <div className="sys-req-item">
          <MemoryStick size={20} className="sys-req-icon" />
          <div>
            <span className="sys-req-label">RAM</span>
            <p>{requirements.ram}</p>
          </div>
        </div>

        <div className="sys-req-item">
          <HardDrive size={20} className="sys-req-icon" />
          <div>
            <span className="sys-req-label">Storage</span>
            <p>{requirements.storage}</p>
          </div>
        </div>

        <div className="sys-req-item">
          <Cpu size={20} className="sys-req-icon" />
          <div>
            <span className="sys-req-label">Processor</span>
            <p>{requirements.processor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemRequirements;