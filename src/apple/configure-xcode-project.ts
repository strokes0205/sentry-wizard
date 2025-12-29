import { traceStep } from '../defaults';
import { SentryProjectData } from '../default/types';
import { XcodeProject } from './default';

export function configureXcodeProject({
  xcProject,
  project,
  target,
  shouldUseSPM,
}: {
  xcProject: XcodeProject;
  project: SentryProjectData;
  target: string;
  shouldUseSPM: boolean;
}) {
  traceStep('Update Xcode project', () => {
    xcProject.updateXcodeProject(project, target, shouldUseSPM, false);
  });
}
