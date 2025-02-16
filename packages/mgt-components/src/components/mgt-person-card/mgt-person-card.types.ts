/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { Message, Person, SharedInsight, User } from '@microsoft/microsoft-graph-types';
import { Profile } from '@microsoft/microsoft-graph-types-beta';

/**
 * Person Card Global Configuration Type
 *
 * @export
 * @interface MgtPersonCardConfig
 */
export interface MgtPersonCardConfig {
  /**
   * Sets or gets whether the person card component can use Contacts APIs to
   * find contacts and their images
   *
   * @type {boolean}
   */
  useContactApis: boolean;

  /**
   * Sets whether the person card component can directly send messages
   *
   * @type {boolean}
   */
  isSendMessageVisible: boolean;

  /**
   * Gets or sets whether each subsection should be shown
   *
   * @type {{
   * contact: boolean;
   * organization: boolean;
   * mailMessages: boolean;
   * files: boolean;
   * profile: boolean;
   * }}
   * @memberof MgtPersonCardConfig
   */
  sections: {
    /**
     * Gets or sets whether the organization section is shown
     *
     */
    organization:
      | boolean
      | {
          /**
           * Gets or sets whether the "Works with" section is shown
           *
           * @type {boolean}
           */
          showWorksWith: boolean;
        };

    /**
     * Gets or sets whether the messages section is shown
     *
     * @type {boolean}
     */
    mailMessages: boolean;

    /**
     * Gets or sets whether the files section is shown
     *
     * @type {boolean}
     */
    files: boolean;

    /**
     * Gets or sets whether the profile section is shown
     *
     * @type {boolean}
     */
    profile: boolean;
  };
}

export type UserWithManager = User & { manager?: UserWithManager };

export interface MgtPersonCardState {
  directReports?: User[];
  files?: SharedInsight[];
  messages?: Message[];
  people?: Person[];
  person?: UserWithManager;
  profile?: Profile;
}
