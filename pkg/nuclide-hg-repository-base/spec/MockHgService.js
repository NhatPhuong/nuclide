'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import {Observable, Subject} from 'rxjs';
import type {DiffInfo, StatusCodeIdValue} from '../lib/HgService';
import type {NuclideUri} from '../../commons-node/nuclideUri';

// This class is meant to be stubbed out.
module.exports = class MockHgService {

  waitForWatchmanSubscriptions(): Promise<void> {
    return Promise.resolve();
  }

  fetchStatuses(
    filePaths: Array<NuclideUri>,
    options: ?any,
  ): Promise<Map<string, StatusCodeIdValue>> {
    return Promise.resolve(new Map());
  }

  observeFilesDidChange(): Observable<Array<NuclideUri>> {
    return new Subject();
  }

  observeHgIgnoreFileDidChange(): Observable<void> {
    return new Subject();
  }

  observeHgRepoStateDidChange(): Observable<void> {
    return new Subject();
  }

  deleteBookmark(name: string): Promise<void> {
    return Promise.resolve();
  }

  renameBookmark(name: string, nextName: string): Promise<void> {
    return Promise.resolve();
  }

  observeHgConflictStateDidChange(): Observable<void> {
    return new Subject();
  }

  fetchDiffInfo(filePaths: Array<NuclideUri>): Promise<?Map<NuclideUri, DiffInfo>> {
    return Promise.resolve(null);
  }

  fetchActiveBookmark(): Promise<string> {
    return Promise.resolve('');
  }

  fetchBookmarks(): Promise<Array<Object>> {
    return Promise.resolve([]);
  }

  observeActiveBookmarkDidChange(): Observable<void> {
    return new Subject();
  }

  observeBookmarksDidChange(): Observable<void> {
    return new Subject();
  }

  dispose(): Promise<void> {
    return Promise.resolve();
  }
};
